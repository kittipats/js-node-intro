import fs from 'fs';
import http from 'http';
import chalk from 'chalk';

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url === '/frenchPress') {
        fs.createReadStream(__dirname + '/frenchPress.txt').pipe(res);
    } else {
        res.end("Hello world");
    }
}).listen('3201', 'localhost');

console.log(chalk.green("Server starting...."));
