const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
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
      res.send(
        `This is the list of our students\nNumber of students: ${students.length}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`,
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
});
app.listen(1245);

module.exports = app;
