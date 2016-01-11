// A googol (10^100) is a massive number: one followed by one-hundred zeros; 100^100 is almost unimaginably large:
// one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.
//
// Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?

var BigInteger = require("../lib/BigInteger.js");

var max_sum = 0;

for (var a=0; a<100; a++) {
    for (var b=0; b<100; b++) {
        var big_number = BigInteger.pow(String(a), b);
        var digits = big_number.split('');
        var sum = digits.map(function(v){
            return parseInt(v);
        }).reduce(function(previousValue, currentValue){
            return previousValue + currentValue;
        });
        max_sum = sum > max_sum ? sum : max_sum;
        //console.log("Evaluated %d^%d: current max sum = %d", a, b, max_sum);
    }
}

console.log(max_sum);