var bf = new Buffer("Hello");
console.log(bf.toString());
console.log(bf.toString('base64'));

console.log(bf.toString('utf-8', 0, 2));
