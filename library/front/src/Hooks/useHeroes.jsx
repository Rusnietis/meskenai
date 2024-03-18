import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { SERVER_URL } from '../Constants/main';
import * as a from '../Actions/heroes';
import { MessagesContext } from '../Contexts/Messages';
import { Router } from '../Contexts/Router';
import { Auth } from '../Contexts/Auth';


export default function useHeroes(dispachHeroes) {

    const [storeHero, setStoreHero] = useState(null);
    const [updateHero, setUpdateHero] = useState(null);
    const [destroyHero, setDestroyHero] = useState(null);
    const {setUser} = useContext(Auth);
    const { addMessage } = useContext(MessagesContext);
    const { setErrorPageType } = useContext(Router);

    //list
    useEffect(_ => {
        axios.get(`${SERVER_URL}/heroes`, { withCredentials: true })
            .then(res => {
                dispachHeroes(a.getHeroes(res.data))
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
    }, [dispachHeroes]);



    //store
    useEffect(_ => {
        if (null !== storeHero) {
            const uuid = uuidv4();
            dispachHeroes(a.storeHeroAsTemp({ ...storeHero, id: uuid }));
            const toServer = { ...storeHero };
            delete toServer.author;
            delete toServer.book;
            axios.post(`${SERVER_URL}/heroes`, {...toServer, id: uuid}, { withCredentials: true })
                .then(res => {
                    dispachHeroes(a.storeHeroAsReal(res.data));
                    setStoreHero(null);
                    addMessage(res.data.message);
                })
                .catch(err => {
                    dispachHeroes(a.storeHeroAsUndo({ id: uuid }));
                    setStoreHero(null);
                    err?.response?.data?.message && addMessage(err.response.data.message);
                });
        }
    }, [storeHero, dispachHeroes, addMessage]);

    useEffect(_ => {
        if (null !== destroyHero) {
            dispachHeroes(a.deleteHeroAsTemp(destroyHero));
            axios.delete(`${SERVER_URL}/heroes/${destroyHero.id}`, { withCredentials: true })
                .then(res => {
                    setDestroyHero(null);
                    dispachHeroes(a.deleteHeroAsReal(res.data));
                    addMessage(res.data.message);
                })
                .catch(err => {
                    dispachHeroes(a.deleteHeroAsUndo(destroyHero));
                    setDestroyHero(null);
                    err?.response?.data?.message && addMessage(err.response.data.message);
                });
        }
    }, [destroyHero, dispachHeroes, addMessage]);


    useEffect(_ => {
        if (null !== updateHero) {
            dispachHeroes(a.updateHeroAsTemp(updateHero));
            const toServer = { ...updateHero };
            delete toServer.author;
            delete toServer.book;
            if (updateHero.image === updateHero.old.image) {
                toServer.image = null;
            }
            axios.put(`${SERVER_URL}/heroes/${updateHero.id}`, toServer, { withCredentials: true })
                .then(res => {
                    setUpdateHero(null);
                    dispachHeroes(a.updateHeroAsReal(res.data));
                    addMessage(res.data.message);
                })
                .catch(err => {
                    setUpdateHero(null);
                    dispachHeroes(a.updateHeroAsUndo(updateHero));
                    err?.response?.data?.message && addMessage(err.response.data.message);
                });
        }
    }, [updateHero, dispachHeroes, addMessage]);






    return {
        storeHero,
        setStoreHero,
        updateHero,
        setUpdateHero,
        destroyHero,
        setDestroyHero
    };
}