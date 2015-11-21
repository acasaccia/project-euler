console.time('Elapsed');
require('./Problems/' + process.argv[2] + '.js');
var end = new Date();
console.timeEnd('Elapsed');