import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { SERVER_URL } from '../Constants/main';
import * as a from '../Actions/books';


export default function useBooks(dispachBooks) {

    const [storeBook, setStoreBook] = useState(null);
    const [updateBook, setUpdateBook] = useState(null);
    const [destroyBook, setDestroyBook] = useState(null);


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



    //store
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
                })
                .catch(err => {
                    dispachBooks(a.storeBookAsUndo({ id: uuid }));
                    setStoreBook(null);
                });
        }
    }, [storeBook, dispachBooks]);

    useEffect(_ => {
        if (null !== destroyBook) {
            dispachBooks(a.deleteBookAsTemp(destroyBook));
            axios.delete(`${SERVER_URL}/books/${destroyBook.id}`)
                .then(res => {
                    setDestroyBook(null);
                    dispachBooks(a.deleteBookAsReal(res.data));
                })
                .catch(err => {
                    dispachBooks(a.deleteBookAsUndo(destroyBook));
                    setDestroyBook(null);
                });
        }
    }, [destroyBook, dispachBooks]);


    useEffect(_ => {
        if (null !== updateBook) {
            dispachBooks(a.updateBookAsTemp(updateBook));
            const withOutAuthor = { ...updateBook };
            delete withOutAuthor.author;
            axios.put(`${SERVER_URL}/books/${updateBook.id}`, withOutAuthor)
                .then(res => {
                    setUpdateBook(null);
                    dispachBooks(a.updateBookAsReal(res.data));
                })
                .catch(err => {
                    setUpdateBook(null);
                    dispachBooks(a.updateBookAsUndo(updateBook));
                });
        }
    }, [updateBook, dispachBooks]);






    return {
        storeBook,
        setStoreBook,
        updateBook,
        setUpdateBook,
        destroyBook,
        setDestroyBook
    };
}