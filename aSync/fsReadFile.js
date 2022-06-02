const fs = require('fs');
const { FileContents } = require('./fileContents.js');

const displayContents = (fileContents) => {
  fileContents.forEach(({ file, content }) => {
    console.log(file);
    console.log('-----');
    console.log(content);
  });
};

const main = () => {
  const files = fs.readdirSync('./');
  const fileContents = new FileContents(files, displayContents);

  files.forEach((file) => {
    fs.readFile(file, 'utf-8', (error, content) => {
      fileContents.addFileContents(file, content);
    });
  });
};

main();

