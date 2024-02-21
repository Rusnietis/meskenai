import './App.scss';
import './buttons.scss';
import './form.scss';
import { useState } from 'react';



export default function App() {
    const [cat, setCat] = useState('');

    const saveCat = _ => {
        localStorage.setItem('cat', cat);
    }

   

    return (
        <div className="App">
            <header className="App-header">
                <h1>Local storage</h1>
                <div className="form">
                   <label>Cat</label>
                   <input type="text" name="cat" value={cat} onChange={e => setCat(e.target.value)}/>
                   <label>Dog</label>
                   <input type="text" name="dog" />
                   <label>Bird</label>
                   <input type="text" name="bird" />
                   <div className='buttons'>
                     <button className="green" onClick={saveCat}>Save cat</button>

                    </div>

                </div>

            </header>
        </div>
    );
}