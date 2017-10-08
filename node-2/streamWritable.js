console.log("stdout is writable stream? The answer is " + process.stdout.writable);

process.stdout.write("Hello");
process.stdout.write(", it's me.");
