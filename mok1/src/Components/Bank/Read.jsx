import { Show } from "./Show"

export default function Read({ accounts,setDeleteData, setEditData }) {

    return (

        <div className="card">
            <h2>BANKAS</h2>
            <div className="card-header">
                <h3>Banko klientų sąrašas</h3>

            </div>

            <div className="card-body">


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
                </table>
                <tbody>
                    <ul className="list-group">
                        <div>
                            <th scope="row">1</th>

                            {
                                accounts.map(account => <li key={account.id} className="list-group-item"><Show account={account} setDeleteData={setDeleteData} setEditData={setEditData} /></li>)
                            }
                        </div>
                    </ul>


                </tbody>






    
               




            </div>
        </div>




    )

}