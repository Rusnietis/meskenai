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

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.get('/api/accounts', async (req, res) => {
  try {
    const data = await fs.readFile('accounts.json', 'utf-8');
    const accounts = JSON.parse(data);
    res.json(accounts);
  } catch (error) {
    console.error('Error reading accounts file:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/accounts', async (req, res) => {
  try {
    const data = await fs.readFile('accounts.json', 'utf-8');
    const accounts = JSON.parse(data);
    
    const newAccount = {
      id: accounts.length + 1,
      ...req.body,
      balance: 0
    };

    accounts.push(newAccount);

    await fs.writeFile('accounts.json', JSON.stringify(accounts, null, 2), 'utf-8');

    res.json(newAccount);
  } catch (error) {
    console.error('Error creating account:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/api/accounts/:id', async (req, res) => {
  try {
    const accountId = parseInt(req.params.id);
    const data = await fs.readFile('accounts.json', 'utf-8');
    let accounts = JSON.parse(data);

    accounts = accounts.filter(account => account.id !== accountId);

    await fs.writeFile('accounts.json', JSON.stringify(accounts, null, 2), 'utf-8');

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting account:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/accounts/:id/add-funds', async (req, res) => {
  try {
    const accountId = parseInt(req.params.id);
    const { amount } = req.body;

    const data = await fs.readFile('accounts.json', 'utf-8');
    let accounts = JSON.parse(data);

    const accountIndex = accounts.findIndex(account => account.id === accountId);

    if (accountIndex !== -1) {
      accounts[accountIndex].balance += parseFloat(amount);
      await fs.writeFile('accounts.json', JSON.stringify(accounts, null, 2), 'utf-8');
      res.status(204).send();
    } else {
      res.status(404).send('Account not found');
    }
  } catch (error) {
    console.error('Error adding funds:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/accounts/:id/withdraw-funds', async (req, res) => {
  try {
    const accountId = parseInt(req.params.id);
    const { amount } = req.body;

    const data = await fs.readFile('accounts.json', 'utf-8');
    let accounts = JSON.parse(data);

    const accountIndex = accounts.findIndex(account => account.id === accountId);

    if (accountIndex !== -1) {
      if (accounts[accountIndex].balance >= parseFloat(amount)) {
        accounts[accountIndex].balance -= parseFloat(amount);
        await fs.writeFile('accounts.json', JSON.stringify(accounts, null, 2), 'utf-8');
        res.status(204).send();
      } else {
        res.status(400).send('Insufficient funds');
      }
    } else {
      res.status(404).send('Account not found');
    }
  } catch (error) {
    console.error('Error withdrawing funds:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});