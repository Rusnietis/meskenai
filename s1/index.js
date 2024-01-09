const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Labas Bebrai!');
})

app.listen(port, () => {
  console.log(`Bebras klauso ${port} porto.`);
});