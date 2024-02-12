import './App.scss';
import './buttons.scss';
import { useState } from 'react';
import Sq from './Components/Sq'
import BigSq3 from './Components/BigSq3';
import BigSq4 from './Components/BigSq4';
import randomColor from './Functions/randomColor';
import rand from './Functions/rand';

export default function App() {

    const [squares, setSquares] = useState([]);

    const add = _ => {
        setSquares(s => [...s,
        {
            color: randomColor(),
            id: rand(),
        }
        ]);
    }

    const reset = _ => {
        setSquares([]);
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>React</h1>
                <div className="squares">

                    {
                        // squares.map((s, i) => <Sq square={s} key={i} />)
                        squares.map((s, i) => <Sq setSquares={setSquares} square={s} key={i} />)
                        // squares.map((s, i) => s.show ? <Sq setSquares={setSquares} square={s} key={i} /> : null)
                    }
                </div>
                <div className="buttons">
                    <button className="red" onClick={add}>+</button>
                    <button className="green" onClick={reset}>0</button>
                </div>
                <div className="squares">
                    <BigSq3 />
                    <BigSq4 />

                </div>

            </header>


        </div>








    );
}