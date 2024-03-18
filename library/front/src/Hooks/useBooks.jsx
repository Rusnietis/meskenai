import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { SERVER_URL } from '../Constants/main';
import * as a from '../Actions/books';
import { MessagesContext } from '../Contexts/Messages';
import { Router } from '../Contexts/Router';
import { Auth } from '../Contexts/Auth';

export default function useBooks(dispachBooks) {

    const [storeBook, setStoreBook] = useState(null);
    const [updateBook, setUpdateBook] = useState(null);
    const [destroyBook, setDestroyBook] = useState(null);
    const {setUser} = useContext(Auth);
    const { addMessage } = useContext(MessagesContext);
    const { setErrorPageType } = useContext(Router);

    //list
    useEffect(_ => {
        axios.get(`${SERVER_URL}/books`, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                dispachBooks(a.getBooks(res.data))
            })
            .catch(err => {
                if (err?.response?.status === 401) {
                    if (err.response.data.type === 'login') {
                        window.localStorage.removeItem('user');
                        window.localStorage.removeItem('role');
                        window.localStorage.removeItem('id');
                        setUser(null);
                        window.location.href = '#login';
                    } else {
                        setErrorPageType(401);
                    }
                } else {
                    setErrorPageType(503);
                }
            });
    }, [dispachBooks]);

    useEffect(_ => {
        if (null !== storeBook) {
            const uuid = uuidv4();
            dispachBooks(a.storeBookAsTemp({ ...storeBook, id: uuid }));
            const withOutAuthor = { ...storeBook };
            delete withOutAuthor.author;
            axios.post(`${SERVER_URL}/books`, { ...withOutAuthor, id: uuid }, { withCredentials: true })
                .then(res => {
                    dispachBooks(a.storeBookAsReal(res.data));
                    setStoreBook(null);
                    addMessage(res.data.message);
                })
                .catch(err => {
                    dispachBooks(a.storeBookAsUndo({ id: uuid }));
                    setStoreBook(null);
                    err?.response?.data?.message && addMessage(err.response.data.message);
                });
        }
    }, [storeBook, dispachBooks, addMessage]);

    useEffect(_ => {
        if (null !== destroyBook) {
            dispachBooks(a.deleteBookAsTemp(destroyBook));
            axios.delete(`${SERVER_URL}/books/${destroyBook.id}`, { withCredentials: true })
                .then(res => {
                    setDestroyBook(null);
                    dispachBooks(a.deleteBookAsReal(res.data));
                    addMessage(res.data.message);
                })
                .catch(err => {
                    dispachBooks(a.deleteBookAsUndo(destroyBook));
                    setDestroyBook(null);
                    err?.response?.data?.message && addMessage(err.response.data.message);
                });
        }
    }, [destroyBook, dispachBooks, addMessage]);

    useEffect(_ => {
        if (null !== updateBook) {
            dispachBooks(a.updateBookAsTemp(updateBook));
            const withOutAuthor = { ...updateBook };
            delete withOutAuthor.author;
            axios.put(`${SERVER_URL}/books/${updateBook.id}`, withOutAuthor, { withCredentials: true })
                .then(res => {
                    setUpdateBook(null);
                    dispachBooks(a.updateBookAsReal(res.data));
                    addMessage(res.data.message);
                })
                .catch(err => {
                    setUpdateBook(null);
                    dispachBooks(a.updateBookAsUndo(updateBook));
                    err?.response?.data?.message && addMessage(err.response.data.message);
                });
        }
    }, [updateBook, dispachBooks, addMessage]);

    return {
        storeBook,
        setStoreBook,
        updateBook,
        setUpdateBook,
        destroyBook,
        setDestroyBook
    };
}