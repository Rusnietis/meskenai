


export function Show({ account, setDeleteData, setEditData }) {


    
    return (

        <table className="table">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"><h4>Vardas</h4></th>
                    <th scope="col"><h4>Pavardė</h4></th>
                    <th scope="col"><h4>Saskaitos Nr.</h4></th>
                    <th scope="col"><h4>Suma Eur</h4></th>
                    <th scope="col"><h4>Operacijos</h4></th>
                </tr>

            </thead>
            <tbody>


                <tr>
                    <th scope="row"></th>

                    <td><h4>{account.firstName}</h4></td>
                    <td><h4>{account.lastName}</h4></td>
                    <td><h4>{account.account}</h4></td>
                    <td><h4>{account.balance}</h4></td>
                    <td>
                        <button className="red" onClick={_ => setDeleteData(account)}>Trinti</button>
                        <button className="green" onClick={_ => setEditData(account)}>Edit</button>
                    
                    </td>
                    
                
            
                </tr>
                <tr>
                    <th scope="row"></th>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        {/* <button className="red" onClick={_ => setDeleteData(account)}>Trinti</button>
                        <input type="number" placeholder="Suma Eur" />
                        <button className="black">Pridėti lėšų</button>
                        <button className="black">Nuskaityti lėšas</button> */}
                    </td>
                    {/* <button className="green" onClick={_ => setEditData(account)}>Edit</button> */}
                
                </tr>
            </tbody>
        </table>
    );
}