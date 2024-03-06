import { Show } from "./Show"

export default function Read({ accounts, setDeleteData, setEditData }) {

    return (
        <span className="card">
            <div className="card-header">
                <h1>BANKAS</h1>
                <h2>Klientu sarasas</h2>
            </div>
            <span className="card-body">
                <ul className="list-group">
                    {

                        accounts.map(account => <li key={account.id} className="list-group-item">
                            <Show account={account} setDeleteData={setDeleteData} setEditData={setEditData} />
                            {/* <h6>Lešų pridėjimas/nuėmimas</h6>
                                     <input type="number" placeholder="Suma Eur" />
                                     <button className="black">Pridėti lėšų</button>
                                     <button className="black">Nuskaityti lėšas</button> */}
                        </li>)
                    }

                </ul>
            </span>

        </span>





        // <>
        //     <h2>BANKAS</h2>
        //     <div className="header">
        //         <h3>Banko klientų sąrašas</h3>

        //     </div>

        //     <table className="table">
        //         <thead>
        //             <tr>
        //                 <th scope="col">#</th>
        //                 <th scope="col">Vardas</th>
        //                 <th scope="col">Pavardė</th>
        //                 <th scope="col">Saskaitos Nr.</th>
        //                 <th scope="col">Suma Eur</th>
        //                 <th scope="col">Operacijos</th>
        //             </tr>

        //         </thead>

        //         <tbody>
        //             <tr>
        //                 <th scope="row">1</th>

        //                 {
        //                     accounts.map(account => key={account.id} className="list-group-item">
        //                             <Show account={account} setDeleteData={setDeleteData} setEditData={setEditData} />
        //                             {/* <h6>Lešų pridėjimas/nuėmimas</h6>
        //                             <input type="number" placeholder="Suma Eur" />
        //                             <button className="black">Pridėti lėšų</button>
        //                             <button className="black">Nuskaityti lėšas</button> */}
        //                         )
        //                 }

        //             </tr>
        //             <tr>

        //             </tr>
        //         </tbody>

        //     </table>
        // </>





    )

}