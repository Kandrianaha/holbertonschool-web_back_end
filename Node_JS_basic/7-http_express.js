const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const db = process.argv[2];
  const lines = [];

  lines.push('This is the list of our students');

  countStudents(db)
    .then(() => {
      res.send(lines.join('\n'));
    })
    .catch((err) => {
      lines.push(err.message);
      res.send(lines.join('\n'));
    });
});

app.listen(1245);

module.exports = app;
