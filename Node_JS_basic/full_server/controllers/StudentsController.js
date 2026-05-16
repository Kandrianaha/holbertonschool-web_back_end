import { readDatabase } from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((Data) => {
        const fields = Object.keys(data).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
      );
      let output = 'This is the list of our students\n';
      fields.forEach((field) => {
        output += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });
      response.status(200).send(output.trim());
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, repsonse) {
    const { major} = request.params;
    if (major != 'CS' && major != 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
    .then((data) => {
      const list = data[major] || [];
      response.status(200).send(`List: ${list.join(', ')}`);
    })
    .catch(() => response.status(500).send('Cannot load the database'));
  }
}
