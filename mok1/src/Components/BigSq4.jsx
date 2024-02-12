import { useState } from "react"
import randomColor from "../Functions/randomColor";

export default function BigSq4() {

    const [sq4, setSq4] = useState('#000000');
    const change4 = _ => {
        setSq4(randomColor())
    }

    return (
        <div className="square big pointer" style={{
            backgroundColor: sq4 + '33',
            border: '1px solid' + sq4
        }}
        onClick={change4}
        >
            This is BigSq 4
        </div >
    )
}