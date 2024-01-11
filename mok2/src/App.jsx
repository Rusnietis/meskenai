import { useEffect, useState } from 'react';
import './form.scss';
import './buttons.scss';
import './App.scss';
import axios from 'axios';

const URL = 'http://localhost:3001/animals';

function App() {

  const [animalInput, setAnimalInput] = useState('');
  const [animalEditInput, setAnimalEditInput] = useState('');
  const [animals, setAnimals] = useState(null);
  const [storeAnimals, setStoreAnimals] = useState(null);
  const [updateAnimals, setUpdateAnimals] = useState(null);   
  const [destroyAnimals, setDestroyAnimals] = useState(null);
  const [editStatus, setEditStatus] = useState(null);

  useEffect(_ => {
    axios.get(URL)
      .then(res => setAnimals(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(_ => {
    setAnimalEditInput(animals?.find(animal => animal.id === editStatus)?.name || '');
  }, [editStatus]);


  useEffect(_ => {
    if (null !== storeAnimals) {
      axios.post(URL, storeAnimals)
        .then(res => {
          setAnimals([{ name: storeAnimals.name, id: res.data.id }, ...animals]);
          setAnimalInput('');
        })
        .catch(err => console.log(err));
    }
  }, [storeAnimals]);

  useEffect(_ => {
    if (null !== destroyAnimals) {
      axios.delete(`${URL}/${destroyAnimals.id}`)
        .then(_ => {
          setAnimals(animals.filter(animal => animal.id !== destroyAnimals.id));
        })
        .catch(err => console.log(err));
    }
  }, [destroyAnimals]);

  useEffect(_ => {
    if (null !== updateAnimals) {
      axios.put(`${URL}/${updateAnimals.id}`, updateAnimals)
        .then(_ => {
          setAnimals(animals.map(animal => animal.id === updateAnimals.id ? { ...animal, name: updateAnimals.name } : animal));
          setEditStatus(null);
        })
        .catch(err => console.log(err));
    }
  }, [updateAnimals]);

  const submit = _ => {
    setStoreAnimals({ name: animalInput });
  }

  const change = animal => {
    if (null === editStatus || editStatus !== animal.id) {
      setEditStatus(animal.id)
    }
    else {
      setUpdateAnimals({ name: animalEditInput, id: animal.id });
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>React and Express full of Animals</h1>
        {
          animals && animals.length !== 0 && animals.map(animal => (
            <div key={animal.id} className='animal-line'>
              <h3 style={{
                margin: '30px 0',
                width: '200px',
                display: editStatus === animal.id ? 'none' : 'block'
              }}>{animal.name}</h3>
              <div className="form animal-edit"
                style={{
                  width: '200px',
                  display: editStatus === animal.id ? 'block' : 'none'
                }}>
                <input type="text" value={animalEditInput} onChange={e => setAnimalEditInput(e.target.value)} />
              </div>
              <div>
                <button className="red" onClick={_ => setDestroyAnimals(animal)}>Let go free</button>
                <button className="green" style={{ width: '100px' }} onClick={_ => change(animal)}>{editStatus === animal.id ? 'Submit' : 'Change'}</button>
              </div>
            </div>
          ))
        }
        {
          animals && !animals.length && <p>No Animals Found</p>
        }
        {
          !animals && <p>Animals is loading...</p>
        }
        <div className="form">
          <input type="text" placeholder="Enter Animal" value={animalInput} onChange={e => setAnimalInput(e.target.value)} />
          <div className="buttons">
            <button className="green" onClick={submit}>Submit</button>
            <button className="red" onClick={_ => setAnimalInput('')}>Clear</button>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;