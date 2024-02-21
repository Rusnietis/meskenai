import './App.scss';
import './buttons.scss';
import './form.scss';
import { useState } from 'react';



export default function App() {
    const [cat, setCat] = useState('');
    const [dog, setDog] = useState('');
    const [bird, setBird] = useState('');

    const saveCat = _ => {
        localStorage.setItem('cat', cat);
    }
    const saveDog = _ => {
        localStorage.setItem('dog', dog);
    }
    const saveBird = _ => {
        localStorage.setItem('bird', bird);
    }

    const clear = _ => {
        localStorage.clear();
    }
    const removeCat = _ => {
        localStorage.removeItem('cat');
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Local storage</h1>
                <div className="form">
                    <label>Cat</label>
                    <input type="text" name="cat" value={cat} onChange={e => setCat(e.target.value)} />
                    <label>Dog</label>
                    <input type="text" name="dog" value={dog} onChange={e => setDog(e.target.value)}/>
                    <label>Bird</label>
                    <input type="text" name="bird" value={bird} onChange={e => setBird(e.target.value)}/>
                    <div className='buttons'>
                        <button className="green" onClick={saveCat}>Save</button>
                        <button className="blue" onClick={saveDog}>Save dog</button>
                        <button className="orange" onClick={saveBird}>Save bird</button>
                        <button className="yelow" onClick={removeCat}>Remove</button>
                        <button className="red" onClick={clear}>Clear</button>

                    </div>

                </div>

            </header>
        </div>
    );
}