import './App.scss';
import './buttons.scss';
import { useState } from 'react';
import Sq from './Components/Sq'
import radomColor from './Functions/randomColor'

export default function App() {

    const [squares, setSquares] = useState([]);

    const add = _ => {
        setSquares(s => [...s, radomColor()]);
    }

    const reset = _ => {
        setSquares([]);
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>React </h1>
                <div className="squares">

                    {
                        squares.map((s, i) => <Sq square={s} key={i} />)
                    }
                </div>

                <div className="buttons">
                    <button className="red" onClick={add}>+</button>
                    <button className="green" onClick={reset}>0</button>
                </div>


            </header>


        </div>








    );
}