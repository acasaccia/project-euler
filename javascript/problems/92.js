// A number chain is created by continuously adding the square of the digits in a number to form a new number until it
// has been seen before.
// For example,
//
//    44 ? 32 ? 13 ? 10 ? 1 ? 1
//    85 ? 89 ? 145 ? 42 ? 20 ? 4 ? 16 ? 37 ? 58 ? 89
//
// Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY
// starting number will eventually arrive at 1 or 89.
//
// How many starting numbers below ten million will arrive at 89?

var cache = {
    89: 89,
    1: 1
};

function square_digit(n) {
    if (cache[n] !== undefined) {
        return cache[n];
    }
    var result = 0;
    while (n > 0) {
        var d = n%10;
        result += d * d;
        n = Math.floor(n/10);
    }
    result = square_digit(result);
    cache[n] = result;
    return result;
}

var result = 0;

for (var i=1; i<10000000; i++) {
    if (square_digit(i) === 89) {
        result++;
    }
}

console.log(result);