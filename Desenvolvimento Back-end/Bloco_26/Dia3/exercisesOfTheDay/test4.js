const fs = require('fs');

const writeFile = (fileName, fileContent) => {
  return fs.writeFileSync(`${fileName}.txt`, `${fileContent}`);
};
module.exports = writeFile;