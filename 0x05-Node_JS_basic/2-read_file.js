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

    const headers = lines[0].split(','); // Header row
    const students = lines.slice(1); // Exclude header

    if (students.length === 0) {
      throw new Error('No valid student records found');
    }

    const csStudents = [];
    const sweStudents = [];

    students.forEach((line) => {
      const fields = line.split(',');
      if (fields.length >= headers.length) {
        const field = fields[fields.length - 1].trim();
        const name = fields[0].trim();

        if (field === 'CS') {
          csStudents.push(name);
        } else if (field === 'SWE') {
          sweStudents.push(name);
        }
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
