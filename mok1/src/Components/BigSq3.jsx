import { useState } from "react"
import randomColor from "../Functions/randomColor";

export default function BigSq3() {

    const [sq3, setSq3] = useState('#000000');
    const change3 = _ => {
        setSq3(randomColor());
    }

    return (
        <div className="square big pointer" style={{
            backgroundColor: sq3 + '33',
            border: '1px solid' + sq3
        }}
        onClick={change3}
        >

            This is BigSq 3
        </div >
    )
}