import { Show } from "./Show"

export default function Read({ accounts, setDeleteData, setEditData }) {

    return (

        <>
            <h2>BANKAS</h2>
            <div className="card-header">
                <h3>Banko klientų sąrašas</h3>

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
                        <th scope="row">1</th>

                        {
                            accounts.map(account =>
                                <td key={account.id} className="list-group-item">
                                    <Show account={account} setDeleteData={setDeleteData} setEditData={setEditData} />
                                    <h6>Lešų pridėjimas/nuėmimas</h6>
                                    <input type="number" placeholder="Suma Eur" />
                                    <button className="black">Pridėti lėšų</button>
                                    <button className="black">Nuskaityti lėšas</button>
                                </td>)
                        }

                    </tr>
                    <tr>

                    </tr>
                </tbody>

            </table>
        </>





    )

}