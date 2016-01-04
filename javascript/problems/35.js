// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
// How many circular primes are there below one million?

var is_prime = require("../lib/is_prime.js");

function rotate(n, places) {
	if (places == 0) {
		return n;
	} else {
		var leading_chunk = n.toString().substr(0,places);
		return parseInt((n + leading_chunk).substr(places), 10);
	}
	
}

var circular_primes = [],
	rotations = [],
	n = 0,
	all_primes = false,
	to_skip = {};

for (var i=1000000; i>0; i--) {
	if (!to_skip[i]) {
		all_primes = true;
		rotations = [];
		var i_length = i.toString().length;
		for(var j=0; j<i_length; j++) {
			n = rotate(i,j);
			//console.log("Rotate %d by %d = %d", i, j, n);
			rotations.push(n);
			if (n<i && n.toString().length == i_length) { // here we pay attention not to waste rotations
												 		  // with leading zeros that would result in skipping numbers that should be tested
				to_skip[n] = true;
			}
			if (all_primes && !is_prime(n)) {
				all_primes = false;
			}
		}
		if (all_primes) {
			console.log("Whoa all these rotations are primes! %j", rotations);
			for(var k=0; k<rotations.length; k++) {
				if (circular_primes.indexOf(rotations[k]) === -1) {
					circular_primes.push(rotations[k]);
				}
			}
		}
	}
}

console.log("Circular primes: %j", circular_primes);
console.log("Circular primes count: %d", circular_primes.length);