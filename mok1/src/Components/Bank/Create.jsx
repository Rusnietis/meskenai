import { useState } from "react";



export default function App({ setCreateData }) {

    const [accounts, setAccounts] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [balance, setBalance] = useState(0);



    // const addAccount = () => {
    //     const newAccount = {
    //       firstName: firstName,
    //       lastName: lastName,
    //       balance: balance
    //     };
    //     setAccounts([...accounts, newAccount]);
    //     setFirstName('');
    //     setLastName('');
    //     setBalance(0);
    // }

    const handleSubmit = _ => {

        setCreateData({ firstName, lastName, accounts, balance });
        setFirstName('');
        setLastName('');
        setAccounts('');
        setBalance(0);

    }

    return (

        <div className="container mt-10">
            <div className="header">
                <div className="table-header">

                    {/* <h3>Banko klientų sąrašas</h3> */}
                </div>

                <div className="header"> 
                    <div className="table-header">

                        <h3>Naujų banko klientų sąrašo sukurimas</h3>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Vardas</th>
                                <th scope="col">Pavardė</th>
                                <th scope="col">Saskaitos Nr.</th>
                                <th scope="col">Suma Eur</th>
                                <th scope="col">Operacijos</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th scope="row"></th>
                                <td><input type="text" placeholder="Vardas" value={firstName} onChange={e => setFirstName(e.target.value)} /></td>
                                <td><input type="text" placeholder="Pavardė" value={lastName} onChange={e => setLastName(e.target.value)} /></td>
                                <td><input type="text" placeholder="Sąskaitos nr." value={accounts} onChange={e => setAccounts(e.target.value)} /></td>
                                <td><input type="sum" placeholder="Suma Eur" value={balance} onChange={e => setBalance(e.target.value)} /></td>
                                <td>
                                    <button className="green" onClick={handleSubmit}>Pridėti</button>
                                    <button className="red">Atmesti</button>

                                </td>
                            </tr>



                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}