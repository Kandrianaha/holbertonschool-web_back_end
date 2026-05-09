const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School');
  } else if (req.url === '/students') {
    const db = process.argv[2];
    let output = 'This is the list of our students\n';

    countStudents(db)
      .then(() => {
        res.end(output);
      })
      .catch((err) => {
        output += err.message;
        res.end(output);
      });
  } else {
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
