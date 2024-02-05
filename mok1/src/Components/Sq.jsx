export default function Sq({square}) {

    return (
        <div className="square spin" style={{
            backgroundColor: square + '33',
            border: '1px solid' + square,
        }}>{square}</div>
    )
}