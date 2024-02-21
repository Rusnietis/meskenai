
import './App.scss';
import './buttons.scss';
import './form.scss';
import { useEffect, useState } from 'react';



export default function App() {
    const [cat, setCat] = useState('');
    const [dog, setDog] = useState('');
    const [bird, setBird] = useState('');

    useEffect(_ => {
        const animals = JSON.parse(localStorage.getItem('animals'));
         if (null !== animals) {
            setCat(animals.cat);
            setDog(animals.dog);
            setBird(animals.bird);
        }
    }, []);

    const saveCat = _ => {
        localStorage.setItem('cat', cat);
    }
    const removeCat = _ => {
        localStorage.removeItem('cat');
    }

    const getCat = _ => {
        setCat(localStorage.getItem('cat'));
    }

    const saveDog = _ => {
        localStorage.setItem('dog', dog);
    }
    const removeDog = _ => {
        localStorage.removeItem('dog');
    }

    const saveBird = _ => {
        localStorage.setItem('bird', bird);
    }
    const removeBird = _ => {
        localStorage.removeItem('bird');
    }


    const clear = _ => {
        localStorage.clear();
    }
    
    

    const addAll = _ => {
        localStorage.setItem('animals', JSON.stringify({ cat, dog, bird }));
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Local storage</h1>
                <div className="form">
                    <label>Cat</label>
                    <input type="text" name="cat" value={cat} onChange={e => setCat(e.target.value)} />
                    <label>Dog</label>
                    <input type="text" name="dog" value={dog} onChange={e => setDog(e.target.value)} />
                    <label>Bird</label>
                    <input type="text" name="bird" value={bird} onChange={e => setBird(e.target.value)} />
                    <div className='buttons'>
                        <button className="green" onClick={saveCat}>Save Cat</button>
                        <button className="black" onClick={getCat}>Get cat</button>
                        <button className="green" onClick={saveDog}>Save dog</button>
                        <button className="green" onClick={saveBird}>Save bird</button>
                        <button className="yellow" onClick={removeCat}>Remove Cat</button>
                        <button className="yellow" onClick={removeDog}>Remove Dog</button>
                        <button className="yellow" onClick={removeBird}>Remove Bird</button>
                        <button className="red" onClick={clear}>Clear</button>

                        <button className="white" onClick={addAll}>Add all</button>

                    </div>

                </div>

            </header>
        </div>
    );
}