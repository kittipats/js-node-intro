/* eslint-disable no-unused-vars */

import fs from 'fs';
import chalk from 'chalk';

if (fs.existsSync('temp')) {
    console.log(chalk.red('Directory exists, removing...'));
    if (fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

//Don't do this.
fs.mkdir('temp', function(err) {
    fs.exists('temp', function(exists) {
        if (exists) {
            process.chdir('temp');
            fs.writeFile('test.txt', 'Hello', function(err) {
                fs.rename('test.txt', 'new.txt', function(err) {
                    fs.stat('new.txt', function(err, stat) {
                        console.log(chalk.yellow("File size: " + stat.size + " bytes"));
                        fs.readFile('new.txt', function(err, data) {
                            console.log(chalk.yellow("File content: " + data.toString()));
                        });
                    });
                });
            });
        }
    });
});
