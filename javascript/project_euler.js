console.time('Elapsed');
require('./problems/' + process.argv[2] + '.js');
var end = new Date();
console.timeEnd('Elapsed');