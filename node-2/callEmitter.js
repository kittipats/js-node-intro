//import getResource from './getResource.js';
import getResource from './getResource_Inh.js'
import chalk from 'chalk';

//var r = getResource(5);
var r = new getResource(7); //for inherit

r.on('start', function() {
    console.log(chalk.green("I've started!"));
});

r.on('data', function(d) {
    console.log(chalk.yellow("    Data receive: " + d));
});

r.on('end', function(t) {
    console.log(chalk.red("Complete transmission of " + t));
})
