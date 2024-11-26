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
    process.stdout.write(`Number of students in CS: ${numberOfCS.length}. List: `);
     for (let i = 0; i < numberOfCS.length; i++)
	  {
		  if (i === numberOfCS.length - 1)
		  {
			  process.stdout.write(numberOfCS[i]);
		  }
		  else{
		  	process.stdout.write(numberOfCS[i] + ', ');
		  }
	  }
     process.stdout.write('\n');
    process.stdout.write(`Number of students in SWE: ${numberOfSWE.length}. List: `);
	  for (let i = 0; i < numberOfSWE.length; i++)
	  {
		  if (i === numberOfSWE.length - 1){
			  process.stdout.write(numberOfSWE[i]);
		  }
		  else {
		  process.stdout.write(numberOfSWE[i] + ', ');
		  }
	  }
	  process.stdout.write('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;