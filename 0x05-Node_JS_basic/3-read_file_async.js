const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject();
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
        console.log(`Number of students: ${students.length}`);
        console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
        resolve();
      });
    } catch (error) {
      reject();
      throw new Error('Cannot load the database');
    }
  });
}
module.exports = countStudents;
