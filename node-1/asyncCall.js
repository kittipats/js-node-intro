import { evenDoubler, foo } from './asyncFunction';
import chalk from 'chalk';

var handleResults = function(err, results, time) {
    if(err) {
        console.log(chalk.red("ERROR: " + err.message));
    } else {
        console.log(chalk.green("The results are: " + results + " (" + time + " ms)"));
    }
};

evenDoubler(56781121, handleResults);
evenDoubler(3, handleResults);
evenDoubler(10, handleResults);
evenDoubler(23456, handleResults);

console.log(chalk.magenta("Additional message from syncFunction: " + foo));
