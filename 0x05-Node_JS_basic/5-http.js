const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    try {
      fs.readFile(process.argv[2], 'utf8', (err, data) => {
        if (err) {
          throw new Error('Cannot load the database');
        }
        const lines = data.split('\n').filter((line) => line !== '');
        const students = lines.slice(1);
        const csStudents = [];
        const sweStudents = [];

        students.forEach((line) => {
          const fields = line.split(',');
          if (fields[fields.length - 1] === 'CS') {
            csStudents.push(fields[0]);
          }
          if (fields[fields.length - 1] === 'SWE') {
            sweStudents.push(fields[0]);
          }
        });
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${students.length}\n`);
        res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
        res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}\n`);
        res.end();
      });
    } catch (error) {
      throw new Error('Cannot load the database');
    }
  } else {
    res.end('Hello Holberton School!');
  }
}).listen(1245);

module.exports = app;
