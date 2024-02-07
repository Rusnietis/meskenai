import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../Constants/main';
import { Auth } from '../Contexts/Auth';
import { Router } from '../Contexts/Router';

export default function useFruits() {
    const [fruits, setFruits] = useState(null);
    const [createFruit, setCreateFruit] = useState(null);
    const [editFruit, setEditFruit] = useState(null);
    const [deleteFruit, setDeleteFruit] = useState(null);

    const { user, logout } = useContext(Auth);
    const { show401Page } = useContext(Router);

    useEffect(_ => {
        const withTokenUrl = 
        user ? `${SERVER_URL}/fruits?token=${user.token}` : `${SERVER_URL}/fruits`;

        axios.get(withTokenUrl)
            .then(res => {
                setFruits(res.data);
                console.log(res.data);
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 401) {
                        if (err.response.data.status === 'login') {
                            logout();
                        }
                        show401Page();
                    }
                }
                console.log(err);
            });
    }, []);
    
    
    useEffect(_ => {
        if (null !== createFruit) {
            axios.post(`${SERVER_URL}/fruits`, createFruit)
                .then(res => {
                    setCreateFruit(null);
                    setFruits(f => f.map(fruit => fruit.id === res.data.uuid ? {...fruit, id: res.data.id, temp: false} : fruit));
                })
                .catch(_ => {
                    setCreateFruit(null);
                    setFruits(f => f.filter(fruit => fruit.id !== createFruit.id));
                });
        }
    }, [createFruit]);


    useEffect(_ => {
        if (null !== editFruit) {
            axios.put(`${SERVER_URL}/fruits/${editFruit.id}`, editFruit)
                .then(res => {
                    setEditFruit(null);
                    setFruits(f => f.map(fruit => fruit.id === res.data.id ? {...fruit, temp: false} : fruit));
                })
                .catch(_ => {
                    setEditFruit(null);
                    setFruits(f => f.map(fruit => fruit.id === editFruit.id ? {...fruit.preEdit, temp: false} : fruit));

                });
        }
    }, [editFruit]);

    useEffect(_ => {
        if (null !== deleteFruit) {
            axios.delete(`${SERVER_URL}/fruits/${deleteFruit}`)
                .then(res => {
                    setDeleteFruit(null);
                    setFruits(f => f.filter(fruit => fruit.id !== res.data.id));
                })
                .catch(_ => {
                    setDeleteFruit(null);
                    setFruits(f => f.map(fruit => fruit.id === deleteFruit ? {...fruit, temp: false} : fruit));
                });
        }
    }, [deleteFruit]);




    return {
        fruits,
        setFruits,
        createFruit,
        setCreateFruit,
        editFruit,
        setEditFruit,
        deleteFruit,
        setDeleteFruit
    };
}