import axios from 'axios';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Router } from '../Contexts/Router.jsx';

export default function useGet() {

    const SERVER_URL = 'http://library.org';

    const {setErrorPageType} = useContext(Router);
    
    const [postUrl, setPostUrl] = useState(null);
    const [sendData, setSendData] = useState(null);
    const [returnData, setReturnData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(_ => {
        if (postUrl === null) return;
        axios.post(SERVER_URL + postUrl, sendData)
            .then(response => {
                setReturnData(response.data);
            })
            .catch(error => {
                setErrorPageType('ups');
            })
            .finally(_ => {
                setLoading(false);
            });
    }, [postUrl, setErrorPageType]);

    return { setSendData, returnData, loading, setPostUrl };
}