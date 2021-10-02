// Create a script that display a file content choose by user:
// 1. Ask to the user which file they want to read;
// 2. Read the indicade file;
// 3. Case the file doesnt exist, display on the screen "Inexistent file" and quit script execution;
// 4. Case the file exist, write your content in the screen;
const readline = require('readline');

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    })
  })
}

async function start() {
  const fileName = await question('Type the file path that want read: ');

  try {
    const fileContent = await readFile((fileName, 'utf-8'))
    console.log(fileContent);
  } catch (err) {
    console.log('File doesnt exist');
  }
}
start();

// Done exercise looking at the template;
