// The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the
// result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four
// primes, 792, represents the lowest sum for a set of four primes with this property.
// Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.

var is_prime = require("../lib/is_prime.js");
var sieve = require("../lib/sieve.js");
require("../lib/combinations.js");

var found = false;
var upper_limit = 1000;

while (!found) {
    console.log("Raised upper limit to %d", upper_limit);
    var primes = sieve(upper_limit);
    var build_group = function(group, index) {
        if (found) {
            return;
        }
        if (group.length === 5) {
            console.log(group);
            console.log(group.reduce(function(p,c){
                return p+c;
            }));
            found = true;
            return;
        }
        if (index > primes.length-1) {
            return;
        }
        if (valid(group, primes[index])) {
            group.push(primes[index]);
            build_group(group, index+1);
            group.pop();
        }
        build_group(group, index+1);
    };
    build_group([], 0);
    upper_limit += 1000;
}

function valid(group, element) {
    for (var i=0; i<group.length; i++) {
        if (!is_prime("" + group[i] + element) || !is_prime("" + element + group[i])) {
            return false;
        }
    }
    return true;
}