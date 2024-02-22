import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../Constants/main';

export const Home = createContext();

export const HomeProvider = ({ children }) => {

    const [home, setHome] = useState(null);

    useEffect(_ => {
        axios.get(`${SERVER_URL}/stats`)
            .then(res => {
                setHome(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, [setHome]);

    return (
        <Home.Provider value={{
            home, setHome
        }}>
            {children}
        </Home.Provider>
    );
}