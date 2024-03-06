import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { SERVER_URL } from '../Constants/main';
import * as a from '../Actions/books';
import { MessagesContext } from '../Contexts/Messages';

export default function useBooks(dispachBooks) {

    const [storeBook, setStoreBook] = useState(null);
    const [updateBook, setUpdateBook] = useState(null);
    const [destroyBook, setDestroyBook] = useState(null);
    const { addMessage } = useContext(MessagesContext);

    //list
    useEffect(_ => {
        axios.get(`${SERVER_URL}/books`)
            .then(res => {
                console.log(res.data);
                dispachBooks(a.getBooks(res.data))
            })
            .catch(err => {
                console.log(err);
            });
    }, [dispachBooks]);

    useEffect(_ => {
        if (null !== storeBook) {
            const uuid = uuidv4();
            dispachBooks(a.storeBookAsTemp({ ...storeBook, id: uuid }));
            const withOutAuthor = { ...storeBook };
            delete withOutAuthor.author;
            axios.post(`${SERVER_URL}/books`, {...withOutAuthor, id: uuid})
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
            axios.delete(`${SERVER_URL}/books/${destroyBook.id}`)
                .then(res => {
                    setDestroyBook(null);
                    dispachBooks(a.deleteBookAsReal(res.data));
                    addMessage(res.data.message);
                })
                .catch(err => {
                    console.log('err', err);
                    // dispachBooks(a.deleteBookAsUndo(destroyBook));
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
            axios.put(`${SERVER_URL}/books/${updateBook.id}`, withOutAuthor)
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