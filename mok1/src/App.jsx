import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import './form.scss';
import Create from './Components/Bank/Create';
import Read from './Components/Bank/Read';
import Delete from './Components/Bank/Delete';
import { useEffect, useState } from 'react';
import { lsDestroy, lsRead, lsStore } from './Components/Bank/lsManager';

export default function App() {

    const KEY = 'accounts';
    const [accounts, setAccounts] = useState([]);
    const [createData, setCreateData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [destroyData, setDestroyData] = useState(null);

    console.log(deleteData);

    useEffect(_ => {
        setAccounts(lsRead(KEY));
    }, []);

    useEffect(_ => {
        if (null === createData) {
            return;
        }
        const id = lsStore(KEY, createData);
        setAccounts(prevaccounts => [...prevaccounts, { ...createData, id }]);
        console.log(createData);
    }, [createData]);

    useEffect(_ => {
        if (null === destroyData) {
            return;
        }

        lsDestroy(KEY, destroyData.id);

        setAccounts(prevAccounts => prevAccounts.filter(account => account.id !== destroyData.id));
       


    }, [destroyData]);

    return (

        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="row-1">
                        <Read accounts={accounts} setDeleteData={setDeleteData} />
                    </div>
                    <div className="row-2">
                        <Create setCreateData={setCreateData} />
                    </div>
                </div>


            </div>
            <Delete deleteData={deleteData} setDeleteData={setDeleteData} setDestroyData={setDestroyData} />
        </>
    );
}
