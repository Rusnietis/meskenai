import React, { useState } from 'react';
import './App.scss';
import './buttons.scss';


export default function ExampleComponent() {
    const [count, setCount] = useState(0);
    const [trinti, setTrinti] = useState(0)

    const onClickPlius = (_ => {
        setCount(count + 1)
    })
    const onClickMinus = (_ => {
        setCount(count - 1)
    })

    const onClickTrinti = _ => {
        setTrinti(count)
    }
    // useEffect(() => {
    //     // Šis kodas vykdomas kiekvieną kartą, kai count pasikeičia
    //     document.title = `Jūs paspaudėte ${count} kartus`;
       
    // }, [count]);

    return (
        <>
            <table>
           <h3 style={{color: 'orange', backgroundColor: 'black', fontSize: '25px'  }}>Jūs paspaudėte: {count} kartus</h3>
            
            <button onClick={onClickPlius}>
                Paspauskite mane
            </button> 
            <button onClick={onClickMinus}>
                Sumažinkite mane
            </button>
            <button onClick={onClickTrinti}>
                Trinti
            </button>
            </table>

        </>
    );
}
