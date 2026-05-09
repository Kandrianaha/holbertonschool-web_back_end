const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously with utf-8 encoding
    const data = fs.readFileSync(path, 'utf8');

    // Split lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header line
    const studentLines = lines.slice(1);

    console.log(`Number of students: ${studentLines.length}`);

    const fields = {};

    // Process each student line
    studentLines.forEach((line) => {
      const student = line.split(',');
      const firstname = student[0];
      const field = student[3];

      if (field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // Log statistics for each field
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
