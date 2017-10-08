import request from 'request';
import chalk from 'chalk';

var s = request('https://still-sierra-50926.herokuapp.com/');

s.on('error', function(err) {
    console.log(chalk.red("ERROR: " + err));
})

s.on('data', function(data) {
    console.log(chalk.yellow("Response: " + data));
})

s.on('end', function() {
    console.log(chalk.green("Stream ended successfully."));
})
