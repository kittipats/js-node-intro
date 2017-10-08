import https from 'https';
import chalk from 'chalk';

var url = {
    host: 'still-sierra-50926.herokuapp.com',
    port: 443,
    path: '/',
    method: 'GET'
}

console.log(chalk.green("Processing your request..."));

/*
var req = https.request(url, function(res) {
    console.log(chalk.green(res.statusCode));
    res.pipe(process.stdout);
});

req.end();
*/

https.get(url, function(res) {
    console.log(chalk.green(res.statusCode));
    res.pipe(process.stdout);
})
