import request from 'request';
import fs from 'fs';
import zlib from 'zlib';
//import chalk from 'chalk';

var s = request('https://still-sierra-50926.herokuapp.com/');

//s.pipe(process.stdout);
s.pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('myApp.html.gz'));
