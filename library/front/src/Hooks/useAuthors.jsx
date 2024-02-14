import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { SERVER_URL } from '../Constants/main';
import { getAuthors, storeAuthorAsTemp, storeAuthorAsReal, deleteAuthorAsTemp, deleteAuthorAsReal } from '../Actions/authors';


export default function useAuthors(dispachAuthors) {

    const [storeAuthor, setStoreAuthor] = useState(null);
    const [updateAuthor, setUpdateAuthor] = useState(null);
    const [destroyAuthor, setDestroyAuthor] = useState(null);

    useEffect(_ => {
        axios.get(`${SERVER_URL}/authors`)
            .then(res => {
                // console.log(res.data);
                dispachAuthors(getAuthors(res.data))
            })
            .catch(err => {
                console.log(err);
            });
    }, [dispachAuthors]);


    useEffect(_ => {
        if (null !== storeAuthor) {
            const uuid = uuidv4();
            dispachAuthors(storeAuthorAsTemp({ ...storeAuthor, id: uuid }));
            axios.post(`${SERVER_URL}/authors`, {...storeAuthor, id: uuid})
                .then(res => {
                    setStoreAuthor(null);
                    dispachAuthors(storeAuthorAsReal(res.data));
                })
                .catch(err => {
                    setStoreAuthor(null);
                });
        }
    }, [storeAuthor]);


    // useEffect(_ => {
    //     if (null !== updateAuthor) {

    //         const withTokenUrl = 
    //         user ? `${SERVER_URL}/fruits/${updateAuthor.id}?token=${user.token}` : `${SERVER_URL}/fruits/${updateAuthor.id}`;

    //         axios.put(withTokenUrl, updateAuthor)
    //             .then(res => {
    //                 setUpdateAuthor(null);
    //                 setAuthors(f => f.map(fruit => fruit.id === res.data.id ? {...fruit, temp: false} : fruit));
    //             })
    //             .catch(err => {
    //                 setUpdateAuthor(null);
    //                 setAuthors(f => f.map(fruit => fruit.id === updateAuthor.id ? {...fruit.preEdit, temp: false} : fruit));
    //                 if (err.response) {
    //                     console.log(err.response);
    //                     if (err.response.status === 401) {
    //                         if (err.response.data.status === 'login') {
    //                             logout();
    //                         }
    //                         show401Page();
    //                     }
    //                 }
    //             });
    //     }
    // }, [updateAuthor]);

    useEffect(_ => {
        if (null !== destroyAuthor) {
            dispachAuthors(deleteAuthorAsTemp(destroyAuthor));
            axios.delete(`${SERVER_URL}/authors/${destroyAuthor.id}`)
                .then(res => {
                    setDestroyAuthor(null);
                    dispachAuthors(deleteAuthorAsReal(res.data));
                })
                .catch(err => {
                    setDestroyAuthor(null);
                });
        }
    }, [destroyAuthor]);




    return {
        storeAuthor,
        setStoreAuthor,
        updateAuthor,
        setUpdateAuthor,
        destroyAuthor,
        setDestroyAuthor
    };
}