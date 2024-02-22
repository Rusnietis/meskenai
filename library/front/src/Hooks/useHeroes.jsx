import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { SERVER_URL } from '../Constants/main';
import * as a from '../Actions/heroes';


export default function useHeroes(dispachHeroes) {

    const [storeHero, setStoreHero] = useState(null);
    const [updateHero, setUpdateHero] = useState(null);
    const [destroyHero, setDestroyHero] = useState(null);


    //list
    useEffect(_ => {
        axios.get(`${SERVER_URL}/heroes`)
            .then(res => {
                dispachHeroes(a.getHeroes(res.data))
            })
            .catch(err => {
                console.log(err);
            });
    }, [dispachHeroes]);



    //store
    useEffect(_ => {
        if (null !== storeHero) {
            const uuid = uuidv4();
            dispachHeroes(a.storeHeroAsTemp({ ...storeHero, id: uuid }));
            const withOutAuthor = { ...storeHero };
            delete withOutAuthor.author;
            axios.post(`${SERVER_URL}/heroes`, {...withOutAuthor, id: uuid})
                .then(res => {
                    dispachHeroes(a.storeHeroAsReal(res.data));
                    setStoreHero(null);
                })
                .catch(err => {
                    dispachHeroes(a.storeHeroAsUndo({ id: uuid }));
                    setStoreHero(null);
                });
        }
    }, [storeHero, dispachHeroes]);

    useEffect(_ => {
        if (null !== destroyHero) {
            dispachHeroes(a.deleteHeroAsTemp(destroyHero));
            axios.delete(`${SERVER_URL}/heroes/${destroyHero.id}`)
                .then(res => {
                    setDestroyHero(null);
                    dispachHeroes(a.deleteHeroAsReal(res.data));
                })
                .catch(err => {
                    dispachHeroes(a.deleteHeroAsUndo(destroyHero));
                    setDestroyHero(null);
                });
        }
    }, [destroyHero, dispachHeroes]);


    useEffect(_ => {
        if (null !== updateHero) {
            dispachHeroes(a.updateHeroAsTemp(updateHero));
            const withOutAuthor = { ...updateHero };
            delete withOutAuthor.author;
            axios.put(`${SERVER_URL}/heroes/${updateHero.id}`, withOutAuthor)
                .then(res => {
                    setUpdateHero(null);
                    dispachHeroes(a.updateHeroAsReal(res.data));
                })
                .catch(err => {
                    setUpdateHero(null);
                    dispachHeroes(a.updateHeroAsUndo(updateHero));
                });
        }
    }, [updateHero, dispachHeroes]);






    return {
        storeHero,
        setStoreHero,
        updateHero,
        setUpdateHero,
        destroyHero,
        setDestroyHero
    };
}