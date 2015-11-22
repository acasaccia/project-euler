var assert = require('assert');
var is_prime = require('../is_prime.js').is_prime;

assert(!is_prime(1));
assert(is_prime(2));
assert(is_prime(3));
assert(!is_prime(4));
assert(is_prime(5));
assert(!is_prime(6));
assert(is_prime(7));
assert(!is_prime(8));
assert(!is_prime(9));
assert(!is_prime(10));
assert(is_prime(11));
assert(is_prime(1009));

assert(!is_prime('1'));
assert(is_prime('3 this is going to be removed'));
assert(!is_prime('nothing'));
assert(is_prime(3.1342352));