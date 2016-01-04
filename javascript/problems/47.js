// The first two consecutive numbers to have two distinct prime factors are:
//
// 14 = 2 × 7
// 15 = 3 × 5
// 
// The first three consecutive numbers to have three distinct prime factors are:
// 
// 644 = 2² × 7 × 23
// 645 = 3 × 5 × 43
// 646 = 2 × 17 × 19.
//
// Find the first four consecutive integers to have four distinct prime factors. What is the first of these numbers?

var is_prime = require("../lib/is_prime.js");

var found = false,
	targetStreak = 4,
	streak = 0,
	n=2,
	factorization;

while(!found) {
	factorization = factorize(n);
	//console.log("factorize %j: %j -> %j factors", n, factorization, Object.keys(factorization).length);
	if(Object.keys(factorization).length==targetStreak) {
		streak++;
	} else {
		streak = 0;
	}
	if (streak==targetStreak) {
		found = true;
	}
	n++;
}

n--;

for (var i=targetStreak; i>0; i--) {
	console.log("%j has %j factors %j", n+1-i, targetStreak, factorize(n+1-i));
}

function addFactorizations($factors1, $factors2) {
       //while ( list($factor,$exponent) = each($factors2) ) {
	for (var $factor in $factors2) {
        if (typeof $factors1[$factor] === 'undefined') {
            $factors1[$factor] = $factors2[$factor];
        } else {
            $factors1[$factor] += $factors2[$factor];
		}
    }
    return $factors1;
}

function factorize($number) {
    $factors = {};
    if (is_prime($number)) {
        $factors[$number] = 1;
		return $factors;
	}
    $ceil = Math.sqrt($number);
    $factor = 2;
    while ($factor<=$ceil) {
        if ($number%$factor==0) {
            $factors = addFactorizations($factors, factorize($factor));
			$factors = addFactorizations($factors, factorize($number/$factor));
            break;
        }
		$factor++;
    }
    return $factors;
}