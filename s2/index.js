const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());




app.get('/animals', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
  // res.status(400).end();
  res.json(data);
});

app.post('/animals', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
  const newAnimal = req.body;
  newAnimal.id = uuidv4();
  data.push(newAnimal);
  fs.writeFileSync('./data/data.json', JSON.stringify(data));
  res.json({ id: newAnimal.id,  message: 'Animal at home now', type: 'success' });
});

app.delete('/animals/:id', (req, res) => {
  let data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
  const id = req.params.id;
  data = data.filter(animal => animal.id !== id);
  fs.writeFileSync('./data/data.json', JSON.stringify(data));
  // respond 204 No Content
  // res.status(204).end();
  res.json({ message: 'Animal is free now', type: 'info' });
});

app.put('/animals/:id', (req, res) => {
  let data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
  const id = req.params.id;
  const updatedAnimal = req.body;
  data = data.map(animal => animal.id === id ? {...updatedAnimal, id } : animal);
  fs.writeFileSync('./data/data.json', JSON.stringify(data));
  res.json({ message: 'Animal is diferent now', type: 'info' });
});





app.listen(port, () => {
  console.log(`Žvėrys klauso ${port} porto.`);
});