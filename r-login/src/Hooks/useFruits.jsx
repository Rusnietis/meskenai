import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../Constants/main';
import { Auth } from '../Contexts/Auth';

export default function useFruits() {
    const [fruits, setFruits] = useState(null);
    const [createFruit, setCreateFruit] = useState(null);
    const [editFruit, setEditFruit] = useState(null);
    const [deleteFruit, setDeleteFruit] = useState(null);

    const { user, logout } = useContext(Auth);

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
                        logout();
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
                    console.log(res.data);
                    setFruits(f => f.map(fruit => fruit.id === res.data.uuid ? {...fruit, id: res.data.id, temp: false} : fruit));
                      
                    
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [createFruit]);




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