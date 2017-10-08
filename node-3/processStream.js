process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chuck) {
    process.stdout.write('Data entered: ' + chuck);
});

process.stdin.on('end', function() {
    process.stderr.write('Stream end.\n');
});

process.on('SIGTERM', function() {
    process.stderr.write("Terminating process...");
});

console.log("PID: #" + process.pid);
