// The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways:
// (i) each of the three terms are prime, and,
// (ii) each of the 4-digit numbers are permutations of one another.
// There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is
// one other 4-digit increasing sequence.
// What 12-digit number do you form by concatenating the three terms in this sequence?

var is_prime = require('../lib/is_prime.js').is_prime;
require('../lib/permutations.js');
require('../lib/combinations.js');

for (var i=1000; i<9999; i++) {
    if (is_prime(i)) {
        var primePermutations = [];
        String(i).permutations().forEach(function(permutation){
            permutation = parseInt(permutation);
            if (primePermutations.indexOf(permutation) === -1 &&
                permutation > 999 &&
                is_prime(permutation)) {
                primePermutations.push(permutation);
            }
        });
        if (primePermutations.length>2) {
            var found = false;
            primePermutations.combinations(3).forEach(function(combination){
                var average = (combination[0] + combination[1] + combination[2]) / 3;
                if (combination.indexOf(average) !== -1) {
                    console.log("Found! %j", combination);
                }
            });
            if (found) {
                break;
            }
        }
    }
}