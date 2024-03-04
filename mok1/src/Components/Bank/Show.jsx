export function Show({ accounts,setDeleteData }) {

    return (
        <div className="showLine">
            <div><h2>accounts</h2></div>
            <div className="buttons">
                <button className="red" onClick={_ => setDeleteData(accounts)}>Delete</button>
                <button className="green">Edit</button>
            </div>
        </div>
    );
}