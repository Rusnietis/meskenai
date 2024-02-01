import { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../Constants/main';

export default function useFruits() {
    const [fruits, setFruits] = useState([]);
    const [createFruit, setCreateFruit] = useState(null);
    const [editFruit, setEditFruit] = useState(null);
    const [deleteFruit, setDeleteFruit] = useState(null);


    useEffect(_ => {
        axios.get(`${SERVER_URL}/fruits`)
            .then(res => {
                setFruits(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    
    
    useEffect(_ => {
        if (null !== createFruit) {
            axios.post(`${SERVER_URL}/fruits`, createFruit)
                .then(_ => {
                    setCreateFruit(null);
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