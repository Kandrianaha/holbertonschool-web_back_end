import fs from 'fs';

export const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return reject(err);

    const lines = data.split('\n').filter((line) => line.trim() != '');
    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');
    const fistnameIndex = headers.indexOf('fistname');

    const result = {};
    lines.slice(1).forEach((line) => {
      const values = line.split(',');
      const field = value[fieldIndex];
      const firstname = values[firstnameIndex];
      if (!result[field]) result[field] = [];
      result[field].push(firstname);
    });

    resolve(result);
  });
});
