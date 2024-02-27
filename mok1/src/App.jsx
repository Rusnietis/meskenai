import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import './form.scss';
import Create from './Components/Bank/Create';
import { useState, useEffect } from 'react';
import { lsRead, lsStore } from './Components/Bank/lsManager';
// import { lsStore } from './Components/bank/lsManager';

export default function App() {

    const KEY = 'accounts';
    const [accounts, setAccounts] = useState([]);
    const [createData, setCreateData] = useState([]);
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [balance, setBalance] = useState(0);

    const addAccount = (_ => {
        const newAccount = {
            // firstName: firstName,
            // lastName: lastName,
            // balance: balance
        };
        // setAccounts([...accounts, newAccount]);
        // setFirstName('');
        // setLastName('');
        // setBalance(0);
    }, []);

    useEffect(_ => {
        setAccounts(lsRead(KEY));
    }, []);

    useEffect(_ => {
        if (null === createData) {
            return;
        }
        lsStore(KEY, createData);
    }, [createData]);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="row-1">
                    row
                </div>
                <div className="row-2">
                    <Create setAccounts={setAccounts} />
                </div>
            </div>








        </div>







    );
}
