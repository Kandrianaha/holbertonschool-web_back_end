const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n').filter((line) => line.trim != '');
            const studentLines = lines.slice(1);

            console.log(`Number of students: ${studentLines.length}`);

            const fields = {};
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

            for (const [field, names] of Object.entries(fields)) {
                console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
            }

            resolve();
        });
    });
}

module.exports = countStudents;
