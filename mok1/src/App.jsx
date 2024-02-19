import './App.scss';
import './buttons.scss';
import './form.scss';
import { useState } from 'react';

const animals = ['kate', 'suo', 'briedis', 'kiaule', 'zuikis']

export default function App() {

    
    const [singleText, setSingleText] = useState('');
    const [multiText, setMultiText] = useState({
        animal1: '',
        animal2: '',
        animal3: ''
    });

    const [select, setSelect] = useState('')


    const handleSingleText = e => {
        setSingleText(e.target.value);
    }

    const handleMultiText = e => {
        
        setMultiText(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSelect = e => {
        setSelect(e.target.value);
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Form Control</h1>
                <div className="form">
                    <input type="text" placeholder="Name" value={singleText} onChange={handleSingleText} />
                  

                    <input type="text" name="animal1" placeholder="Animal 1" value={multiText.animal1} onChange={handleMultiText} />
                    <input type="text" name="animal2" placeholder="Animal 2" value={multiText.animal2} onChange={handleMultiText} />
                    <input type="text" name="animal3" placeholder="Animal 3" value={multiText.animal3} onChange={handleMultiText} />

                    <select value={select} onChange={handleSelect}>
                        <option value="">Select</option>
                        {
                            animals.map((animal, index) => <option key={index} value={animal}>{animal.toUpperCase()}</option> )
                        }


                    </select>

                </div>

            </header>
        </div>
    );
}