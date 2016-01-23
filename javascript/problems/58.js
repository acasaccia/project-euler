// Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.
// 
// 37 36 35 34 33 32 31
// 38 17 16 15 14 13 30
// 39 18  5  4  3 12 29
// 40 19  6  1  2 11 28
// 41 20  7  8  9 10 27
// 42 21 22 23 24 25 26
// 43 44 45 46 47 48 49
// 
// It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is
// that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ? 62%.
// 
// If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed.
// If this process is continued, what is the side length of the square spiral for which the ratio of primes along
// both diagonals first falls below 10%?

var is_prime = require("../lib/is_prime.js");

var prime_count = 0;
var side_length = 1;
var biggest;
var previous_corner_element;
var ratio = 0;

while (1) {
    side_length += 2;
    biggest = side_length * side_length;
    previous_corner_element = side_length - 1;
    for (var i=0; i<4; i++) {
        if (is_prime(biggest - previous_corner_element * i)) {
            prime_count++;
        }
    }
    ratio = prime_count / (side_length * 2 - 1);
    //console.log("%d -> %d", side_length, ratio);
    if (ratio < 0.1) {
        break;
    }
}

console.log(side_length);