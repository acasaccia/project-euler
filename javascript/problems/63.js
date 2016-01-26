// The 5-digit number, 16807=75, is also a fifth power. Similarly, the 9-digit number, 134217728=89, is a ninth power.
// How many n-digit positive integers exist which are also an nth power?

var digits = require("../lib/digits.js");

var total = 0;
var powerful = [];
// after base 10 we won't find any, because the number of digit of x is floor(log(10) x) + 1
for (var i=1; i<10; i++) {
    var ar = [];
    // after number of digits is overcome by exponent, it won't "catch" it again because it will keep growing with log
    // while exponent grows linearly
    for (var j=1; j<50; j++) {
        var pow = Math.pow(i,j);
        if (digits(pow) === j) {
            total++;
            ar.push(1);
            powerful[i+"^"+j] = pow;
        } else {
            ar.push(0);
        }
    }
    console.log("%d -> %j", i, ar);
}

console.log(total);
console.log(powerful);