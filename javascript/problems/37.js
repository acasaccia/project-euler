// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.
// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

var is_prime = require("../lib/is_prime.js");

function is_truncatable_prime(n) {
	var sn = n.toString();
	for(var i=1; i<sn.length; i++) {
		var j = parseInt(sn.substr(0,sn.length-i));
		if(!is_prime(j)){
			return false;
		}
		j = parseInt(sn.substr(i));
		if(!is_prime(j)){
			return false;
		}
	}
	return true;
}

var primes = [],
	n=10;
	
while (primes.length < 11) {
	if(is_prime(n) && is_truncatable_prime(n)) {
		console.log("We got one: %d, %d left", n, 10 - primes.length);
		primes.push(n);
	}
	n++;
}

var sum = 0;

for (var i=0;i<11;i++) {
	sum += primes[i];
}
	
console.log("%d", sum);