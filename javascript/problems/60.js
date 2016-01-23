// The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.
// Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.

var is_prime = require("../lib/is_prime.js");
var sieve = require("../lib/sieve.js");
require("../lib/combinations.js");

var found = false;
var primes = sieve(30000);
var primes_buffer = primes.splice(0, 5);
while (!found) {
    var evaluated = primes.shift();
    console.log(evaluated);
    var groups = primes_buffer.combinations(4); // combinations of four elements from primes excluding c
    for (var j=0; j<groups.length; j++) {
        groups[j].push(evaluated); // add c to each group, as a result, get combinations of 5 elements from
                                   // primes containing c
        var combinations = groups[j].combinations(2); // combinations of 2 elements from group
        var all_primes = true;
        for (var i=0; i<combinations.length; i++) {
            var combination_1 = "" + combinations[i][0] + combinations[i][1];
            var combination_2 = "" + combinations[i][1] + combinations[i][0];
            if (!is_prime(combination_1) || !is_prime(combination_2)) {
                all_primes = false;
                break;
            }
        }
        if (all_primes) {
            console.log(groups[j]);
            console.log(combinations);
            console.log(groups[j].reduce(function(p, c){
                return p + c;
            }));
            break;
        }
    }
    primes_buffer.push(evaluated);
    found = all_primes;
}