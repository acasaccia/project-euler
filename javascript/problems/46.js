// It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.
// 
// 9 = 7 + 2×1^2
// 15 = 7 + 2×2^2
// 21 = 3 + 2×3^2
// 25 = 7 + 2×3^2
// 27 = 19 + 2×2^2
// 33 = 31 + 2×1^2
// 
// It turns out that the conjecture was false.
// 
// What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

var is_prime = require("../lib/is_prime.js");

var n = 9,
	found;

while (!found) {
	console.log(n);
	if (!is_prime(n) && !can_rewrite(n)) {
		found = true;
		console.log(n);
	}
	n+=2;
}

function can_rewrite(n) {
	var i=1,
		doublesquare = 2 * Math.pow(i,2),
		prime;
	while (doublesquare<n) {
		prime = n-doublesquare;
		if (is_prime(prime)) {
			console.log("%j can be written as %j + 2*%j^2", n, prime, i);
			return true;
		}
		i++;
		doublesquare = 2 * Math.pow(i,2);
	}
	return false;
}