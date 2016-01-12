// It is possible to show that the square root of two can be expressed as an infinite continued fraction.
//
// sqrt(2) = 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...
//
// By expanding this for the first four iterations, we get:
//
// 1 + 1/2 = 3/2 = 1.5
// 1 + 1/(2 + 1/2) = 7/5 = 1.4
// 1 + 1/(2 + 1/(2 + 1/2)) = 17/12 = 1.41666...
// 1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...
//
// The next three expansions are 99/70, 239/169, and 577/408, but the eighth expansion, 1393/985, is the first example
// where the number of digits in the numerator exceeds the number of digits in the denominator.
//
// In the first one-thousand expansions, how many fractions contain a numerator with more digits than denominator?

var fractions = require("../lib/big_fractions");

var result = 0;
var denominator_cache = {
    '1': {
        n: "2",
        d: "1"
    }
};
var VERBOSE = false;

for (var i=1; i<=1000; i++) {
    var expansion = expand(i);
    if (String(expansion.n).length > String(expansion.d).length) {
        result++;
    }
    if (VERBOSE) {
        var separator = '';
        for (var j=0; j<String(expansion.d).length; j++) {
            separator += '-';
        }
        console.log("Test n° %d:", i);
        console.log("%s", expansion.n);
        console.log(separator);
        console.log("%s", expansion.d);
        console.log("%j", String(expansion.n).length > String(expansion.d).length);
        console.log("");
    }
}

console.log(result);

function expand(n) {
    var den = denominator(n);
    return fractions.sum("1", "1", den.d, den.n);
}

function denominator(n) {
    if (denominator_cache[n]) {
        return denominator_cache[n];
    }
    var den = denominator(n-1);
    denominator_cache[n] = fractions.sum("2", "1", den.d, den.n);
    return denominator_cache[n];
}