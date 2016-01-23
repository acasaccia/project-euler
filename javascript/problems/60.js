var is_prime = require("../lib/is_prime.js");
var sieve = require("../lib/sieve.js");
require("../lib/combinations.js");

var found = false;
var primes = sieve(50000, true);
var primes_buffer = primes.splice(0, 5);
while (!found) {
    var evaluated = primes.shift();
    console.log(evaluated);
    var groups = primes_buffer.combinations(4); // combinations of four elements from primes_buffer excluding c
    for (var j=0; j<groups.length; j++) {
        groups[j].push(evaluated); // add c to each group, as a result, get combinations of 5 elements from
                                   // primes_buffer containing c
        var combinations = groups[j].combinations(2); // combinations of 2 elements from group
        var all_primes = true;
        for (var i=0; i<combinations.length; i++) {
            if (!is_prime("" + combinations[i][0] + combinations[i][1]) ||
                !is_prime("" + combinations[i][1] + combinations[i][0])) {
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