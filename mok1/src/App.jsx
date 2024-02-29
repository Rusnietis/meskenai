import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import './form.scss';
import Create from './Components/Bank/Create';
import Read from './Components/Bank/Read';
import { useEffect, useState } from 'react';
import { lsRead, lsStore } from './Components/Bank/lsManager';

export default function App() {

    // const KEY = 'accounts';
    // const [accounts, setAccounts] = useState([]);
    const [createData, setCreateData] = useState([]);
    
    useEffect(_ => {
        console.log(createData);
    }, [createData]);
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="row-1">
                    Read
                </div>
                <div className="row-2">
                    <Create setCreateData={setCreateData} />
                </div>
            </div>


        </div>

    );
}
