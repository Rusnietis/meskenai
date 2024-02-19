const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const md5 = require('md5');
const { v4: uuidv4 } = require('uuid');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'library'
})
const app = express();
const port = 3001;

app.use(cors());
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

connection.connect();



// router

app.get('/', (req, res) => {
  console.log('Buvo užklausta /');
  res.send('Labas Bebrai!');
});

app.get('/authors', (req, res) => {
  const sql = 'SELECT * FROM authors';
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.json(results);
    }
  });
});

app.post('/authors', (req, res) => {

  const { name, surname, nickname, born } = req.body;
  const sql = 'INSERT INTO authors (name, surname, nickname, born) VALUES (?, ?, ?, ?)';
  connection.query(sql, [name, surname, nickname, born], (err, result) => {
    if (err) {
      res.status(500);
    } else {
      res.json({ success: true, id: result.insertId, uuid: req.body.id });
    }
  });
});

app.delete('/authors/:id', (req, res) => {
  
  const sql = 'DELETE FROM authors WHERE id = ?';
  connection.query(sql, [req.params.id], (err) => {
    if (err) {
      res.status(500);
    } else {
      res.json({ success: true, id: +req.params.id });
    }
  });
});

app.put('/authors/:id', (req, res) => {
    
    const { name, surname, nickname, born } = req.body;
    const sql = 'UPDATE authors SET name = ?, surname = ?, nickname = ?, born = ? WHERE id = ?';
    connection.query(sql, [name, surname, nickname, born, req.params.id], (err) => {
      if (err) {
        res.status(500);
      } else {
        res.json({ success: true, id: +req.params.id });
      }
    });
  });





app.post('/fruits', (req, res) => {



  const { name, color, form } = req.body;
  const sql = 'INSERT INTO fruits (name, color, form ) VALUES (?, ?, ?)';
  connection.query(sql, [name, color, form], (err, result) => {
    if (err) {
      res.status(500);
    } else {
      res.json({ success: true, id: result.insertId, uuid: req.body.id });
    }
  });
});

app.put('/fruits/:id', (req, res) => {



  const { name, color, form } = req.body;
  const sql = 'UPDATE fruits SET name = ?, color = ?, form = ? WHERE id = ?';
  connection.query(sql, [name, color, form, req.params.id], (err) => {
    if (err) {
      res.status(500);
    } else {
      res.json({ success: true, id: +req.params.id });
    }
  });
});


app.delete('/fruits/:id', (req, res) => {



  const sql = 'DELETE FROM fruits WHERE id = ?';
  connection.query(sql, [req.params.id], (err) => {
    if (err) {
      res.status(500);
    } else {
      res.json({ success: true, id: +req.params.id });
    }
  });
});





app.listen(port, () => {
  console.log(`KNYGŲ SERVERIS klauso ${port} porto.`);
});