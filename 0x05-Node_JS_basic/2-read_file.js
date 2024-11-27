const fs = require('fs');

function countStudents(pathToFile) {
  if (!pathToFile) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = fs.readFileSync(pathToFile, 'utf8');
    const lines = data
      .split('\n')
      .filter((line) => line.trim() !== ''); // Remove empty lines

    const students = lines.slice(1); // Exclude header

    if (students.length === 0) {
      throw new Error('No valid student records found');
    }

    const csStudents = [];
    const sweStudents = [];

    students.forEach((line) => {
      const fields = line.split(',');
      console.log(fields[fields.length - 1]);
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
