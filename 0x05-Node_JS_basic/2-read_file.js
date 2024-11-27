const fs = require('fs');

function countStudents(pathToFile) {
  if (pathToFile === null) {
    throw Error('Cannot load the database');
  }
  try {
    const numberOfCS = [];
    const numberOfSWE = [];
    let newData = [];
    const data = fs.readFileSync(pathToFile, 'utf8');
    newData = data.split('\n');
    newData.forEach((value) => {
      if (value.includes('CS')) {
        numberOfCS.push(value.split(',')[0]);
      }
      if (value.includes('SWE')) {
        numberOfSWE.push(value.split(',')[0]);
      }
    });
    console.log(`Number of students: ${newData.length - 2}`);
    console.log(`Number of students in CS: ${numberOfCS.length}. List:`, numberOfCS.join(', '));
    console.log(`Number of students in SWE: ${numberOfSWE.length}. List:`, numberOfSWE.join(', '));
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
