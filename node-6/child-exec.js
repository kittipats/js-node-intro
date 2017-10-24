import { exec } from 'child_process';

var child = exec('uptime', function(err, stdout, stderr) {
    if (err) {
        console.log("Error: " + err);
    } else {
        console.log("Output is: " + stdout);
    }
});

console.log("PID is " + child.pid);
