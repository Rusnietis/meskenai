export function Show({ color, setDeleteData, setEditData }) {
    return (
        <div className="showLine">
            <div className="square" style={{
                backgroundColor: color.color,
                width: color.size / 2 + 'px',
                height: color.size / 2 + 'px',
            }}></div>
            <div className="color-name">{color.name}</div>
            <div className="buttons">
                <button className="red" onClick={_ => setDeleteData(color)}>Delete</button>
                <button className="green" onClick={_ => setEditData(color)}>Edit</button>
            </div>
        </div>
    );
}