// import { Show } from "./Show"

export default function Read({ accounts }) {

    return (
        <div className="header">
            <div className="table-header">
                <h3>Banko klientų sąrašas</h3>

            </div>

            <table className="table">
                {
                    accounts.map(account => <tr key={account.id} className="table-item">Show account={account}</tr>)
                }

            </table>

        </div >


    )

}