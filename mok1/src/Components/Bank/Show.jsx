export function Show({ account, setDeleteData, setEditData }) {

    return (
        <div className="showLine">
            <span><h4>
                {account.firstName} {account.lastName} {account.account} {account.balance}
                </h4></span>
            <div className="buttons">
                <button className="red" onClick={_ => setDeleteData(account)}>Trinti</button>
                <button className="green" onClick={_ => setEditData(account)}>Edit</button>
            </div>
        </div>
    );
}