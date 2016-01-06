// There are exactly ten ways of selecting three from five, 12345:
// 123, 124, 125, 134, 135, 145, 234, 235, 245, and 345
// In combinatorics, we use the notation, 5C3 = 10.
//
// In general,
// nCr = n! / (r! * (n?r)!)
// where r ? n, n! = n×(n?1)×...×3×2×1, and 0! = 1.
// It is not until n = 23, that a value exceeds one-million: 23C10 = 1144066.
// How many, not necessarily distinct, values of nCr, for 1 ? n ? 100, are greater than one-million?

var factorial = require("../lib/factorial.js");

function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n-r));
}

var result = 0;

for (var n=1; n<=100; n++) {
    for (var r=n; r>0; r--) {
        if (nCr(n,r) > 1000000) {
            result++;
        }
    }
}

console.log(result);