import { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../Constants/main';
import { getAuthors } from '../Actions/authors';


export default function useAuthors(dispachAuthors) {

    const [createAuthor, setCreateAuthor] = useState(null);
    const [editAuthor, setEditAuthor] = useState(null);
    const [deleteAuthor, setDeleteAuthor] = useState(null);

    useEffect(_ => {
        axios.get(`${SERVER_URL}/authors`)
            .then(res => {
                console.log(res.data);
                dispachAuthors(getAuthors(res.data))
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    useEffect(_ => {
        if (null !== createAuthor) {
            axios.post(`${SERVER_URL}/authors`, createAuthor)
                .then(res => {
                    setCreateAuthor(null);
                })
                .catch(err => {
                    setCreateAuthor(null);
                });
        }
    }, [createAuthor]);


    // useEffect(_ => {
    //     if (null !== editAuthor) {

    //         const withTokenUrl = 
    //         user ? `${SERVER_URL}/fruits/${editAuthor.id}?token=${user.token}` : `${SERVER_URL}/fruits/${editAuthor.id}`;

    //         axios.put(withTokenUrl, editAuthor)
    //             .then(res => {
    //                 setEditAuthor(null);
    //                 setAuthors(f => f.map(fruit => fruit.id === res.data.id ? {...fruit, temp: false} : fruit));
    //             })
    //             .catch(err => {
    //                 setEditAuthor(null);
    //                 setAuthors(f => f.map(fruit => fruit.id === editAuthor.id ? {...fruit.preEdit, temp: false} : fruit));
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
    // }, [editAuthor]);

    // useEffect(_ => {
    //     if (null !== deleteAuthor) {

    //         const withTokenUrl = 
    //         user ? `${SERVER_URL}/fruits/${deleteAuthor}?token=${user.token}` : `${SERVER_URL}/fruits/${deleteAuthor}`;

    //         axios.delete(withTokenUrl)
    //             .then(res => {
    //                 setDeleteAuthor(null);
    //                 setAuthors(f => f.filter(fruit => fruit.id !== res.data.id));
    //             })
    //             .catch(err => {
    //                 setDeleteAuthor(null);
    //                 setAuthors(f => f.map(fruit => fruit.id === deleteAuthor ? {...fruit, temp: false} : fruit));
    //                 if (err.response) {
    //                     if (err.response.status === 401) {
    //                         if (err.response.data.status === 'login') {
    //                             logout();
    //                         }
    //                         show401Page();
    //                     }
    //                 }
    //             });
    //     }
    // }, [deleteAuthor]);




    return {
        createAuthor,
        setCreateAuthor,
        editAuthor,
        setEditAuthor,
        deleteAuthor,
        setDeleteAuthor
    };
}