console.time('Elapsed');
require('./problems/' + process.argv[2] + '.js');
console.timeEnd('Elapsed');