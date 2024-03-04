import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { SERVER_URL } from '../Constants/main';
import * as a from '../Actions/authors';
import { MessagesContext } from '../Contexts/Messages';


export default function useAuthors(dispachAuthors) {

    const [storeAuthor, setStoreAuthor] = useState(null);
    const [updateAuthor, setUpdateAuthor] = useState(null);
    const [destroyAuthor, setDestroyAuthor] = useState(null);
    const { addMessage } = useContext(MessagesContext);

    useEffect(_ => {
        axios.get(`${SERVER_URL}/authors`)
            .then(res => {
                // console.log(res.data);
                dispachAuthors(a.getAuthors(res.data))
            })
            .catch(err => {
                console.log(err);
            });
    }, [dispachAuthors]);


    useEffect(_ => {
        if (null !== storeAuthor) {
            const uuid = uuidv4();
            dispachAuthors(a.storeAuthorAsTemp({ ...storeAuthor, id: uuid }));
            axios.post(`${SERVER_URL}/authors`, {...storeAuthor, id: uuid})
                .then(res => {
                    setStoreAuthor(null);
                    dispachAuthors(a.storeAuthorAsReal(res.data));
                    addMessage(res.data.message);
                })
                .catch(err => {
                    dispachAuthors(a.storeAuthorAsUndo({ ...storeAuthor, id: uuid }));
                    setStoreAuthor(null);
                    err?.response?.data?.message && addMessage(err.response.data.message);
                });
        }
    }, [storeAuthor, dispachAuthors, addMessage]);


    useEffect(_ => {
        if (null !== updateAuthor) {
            dispachAuthors(a.updateAuthorAsTemp(updateAuthor));
            
            axios.put(`${SERVER_URL}/authors/${updateAuthor.id}`, updateAuthor)
                .then(res => {
                    setUpdateAuthor(null);
                    dispachAuthors(a.updateAuthorAsReal(res.data));
                    addMessage(res.data.message);
                })
                .catch(err => {
                    setUpdateAuthor(null);
                    dispachAuthors(a.updateAuthorAsUndo(updateAuthor));
                    err?.response?.data?.message && addMessage(err.response.data.message);
                });
        }
    }, [updateAuthor, dispachAuthors, addMessage]);

    useEffect(_ => {
        if (null !== destroyAuthor) {
            dispachAuthors(a.deleteAuthorAsTemp(destroyAuthor));
            axios.delete(`${SERVER_URL}/authors/${destroyAuthor.id}`)
                .then(res => {
                    setDestroyAuthor(null);
                    dispachAuthors(a.deleteAuthorAsReal(res.data));
                    addMessage(res.data.message);
                })
                .catch(err => {
                    dispachAuthors(a.deleteAuthorAsUndo(destroyAuthor));
                    setDestroyAuthor(null);
                    err?.response?.data?.message && addMessage(err.response.data.message);
                });
        }
    }, [destroyAuthor, dispachAuthors, addMessage]);




    return {
        storeAuthor,
        setStoreAuthor,
        updateAuthor,
        setUpdateAuthor,
        destroyAuthor,
        setDestroyAuthor
    };
}