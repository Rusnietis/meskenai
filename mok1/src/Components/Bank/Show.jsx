export function Show({ accounts, setDeleteData, setEditData }) {

    return (
        <div className="showLine">
            <div><h2>accounts</h2></div>
            <div className="buttons">
                <button className="red" onClick={_ => setDeleteData(accounts)}>Delete</button>
                <button className="green" onClick={_ => setEditData(accounts)}>Edit</button>
            </div>
        </div>
    );
}