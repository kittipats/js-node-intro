import fs from 'fs';
import chalk from 'chalk';

if (fs.existsSync('temp')) {
    console.log(chalk.red('Directory exists, removing...'));
    if (fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');
if (fs.existsSync('temp')) {
    var fileName = "new.txt";
    process.chdir('temp');
    fs.writeFileSync('test.txt', 'Hello, it\'s me');
    fs.renameSync('test.txt', fileName);
    console.log(chalk.yellow("File size: " + fs.statSync(fileName).size + " bytes"));
    console.log(chalk.yellow("File content: " + fs.readFileSync(fileName).toString()));
}
