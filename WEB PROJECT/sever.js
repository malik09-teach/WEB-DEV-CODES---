const express = require('express');
const path = require('path');
const addNumbers = require('./math');

const app = express();
const port = 5000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
  const arr = [1, 2, 3, 4, 5];
  const result = addNumbers(110, 5);
  res.render('index', { arr, result });
});








app.listen(port, 'localhost', () => {
  console.log(`Server is running at http://localhost:${port}/`);
});