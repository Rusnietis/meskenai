import { useEffect, useState } from "react";


export default function Edit({ editData, setEditData, setUpdateData }) {

    const [accounts, setAccounts] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [balance, setBalance] = useState(0);



    useEffect(_ => {
        if (null === editData) {
            return;
        }
        console.log(editData)
        setFirstName(editData.firstName);

        setLastName(editData.lastName);
        setAccounts(editData.accounts);
        setBalance(editData.balance);


    }, [editData]);

    const save = _ => {

        setUpdateData({ ...editData, firstName, lastName, accounts, balance });

    }

    if (null === editData) {
        return null;
    }


    const handleSubmit = _ => {


        setFirstName('');
        setLastName('');
        setAccounts('');
        setBalance(0);
        
    }

    const deposit = (index, amount) => {
        const newAccounts = [...accounts];
        newAccounts[index].balance += amount;
        setAccounts(newAccounts);
    }

    const withdraw = (index, amount) => {
        const newAccounts = [...accounts];
        newAccounts[index].balance -= amount;
        setAccounts(newAccounts);
    }

    const sortAccounts = () => {
        const newAccounts = [...accounts];
        newAccounts.sort((a, b) => a.lastName.localeCompare(b.lastName));
        setAccounts(newAccounts);
    }






    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit</h5>
                        <button type="button" className="btn-close" onClick={_ => setEditData(null)}></button>
                    </div>
                    <div className="modal-body">
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
                                    {/* <td><input type="text" placeholder="Vardas" value={firstName} onChange={e => setFirstName(e.target.value)} /></td>
                                    <td><input type="text" placeholder="Pavardė" value={lastName} onChange={e => setLastName(e.target.value)} /></td>
                                    <td><input type="text" placeholder="Sąskaitos nr." value={accounts} onChange={e => setAccounts(e.target.value)} /></td> */}
                                    <td><input type="sum" placeholder="Suma Eur" value={balance} onChange={e => setBalance(e.target.value)} /></td>
                                    <td>
                                        <button className="green" onClick={deposit}>Pridėti</button>


                                    </td>
                                </tr>

                            </tbody>
                            <div className="modal-footer">
                                <button type="button" className="green" onClick={save}>Save</button>
                                <button type="button" className="black" onClick={_ => setEditData(null)} >Cancel</button>
                            </div>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}