import { useEffect } from "react";
// setSquares

export default function Sq({ square, setSquares }) {

    useEffect(_ => {
         console.log('Square are born' + square.id)

    }, []);



    const remove = _ => {
        setSquares(s => s.filter(s => s.id !== square.id));
    }


    return (
        <div className="square spin" style={{
            backgroundColor: square.color + '33',
            border: '1px solid' + square.color,
        }}
        onClick={remove}
        >{square.id}</div>
    );
}