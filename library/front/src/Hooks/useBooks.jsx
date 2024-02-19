import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { SERVER_URL } from '../Constants/main';
import * as a from '../Actions/authors';


export default function useBooks(dispachBooks) {

    const [storeBook, setStoreBook] = useState(null);
    const [updateBook, setUpdateBook] = useState(null);
    const [destroyBook, setDestroyBook] = useState(null);
  




    return {
        storeBook,
        setStoreBook,
        updateBook,
        setUpdateBook,
        destroyBook,
        setDestroyBook
    };
}