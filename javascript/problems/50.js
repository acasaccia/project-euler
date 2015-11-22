// The prime 41, can be written as the sum of six consecutive primes:
//
// 41 = 2 + 3 + 5 + 7 + 11 + 13
// This is the longest sum of consecutive primes that adds to a prime below one-hundred.
//
// The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.
//
// Which prime, below one-million, can be written as the sum of the most consecutive primes?

// algorithm

var primes = sieve(1000000);

var sum = 0, result = 0, sequence_length = 0, sequence = [];

var primes_length = primes.length;

for (var i=0; i<primes_length; i++) {
	for (var j=i; j<primes_length; j++) {
		sequence = primes.slice(i, j+1),
		sum = sequence.reduce(function(a, b) { return a + b; }, 0);
		if (sum>1000000) {
			break;
		}
		if (is_prime(sum) ) {
			if (sequence.length>sequence_length) {
				result = sum;
				sequence_length = j-i+1;
				console.log("Starting from %d adding up to %d (sequence of %d) got %d which is prime", primes[i], primes[j], sequence_length, result);
			}
		}
	}
}

console.log(result);

//console.log("%j", primes);
	
// functions

function is_prime(n) {
	var i = Math.floor(Math.sqrt(n));
	while(i>1) {
		if (n%i==0) {
			return false;
		}
		i--;
	}
	return true;
}

function sieve(n) {
	
	var primes = {},
		p = 2, c, next_p;
	
	for(var i=2; i<=n; i++) {
		primes[i] = null;
	}
	
	do {
		
		// console.log("p is now %d", p);
		
		primes[p] = true;
		c=2;
		
		while (typeof primes[p*c] !== 'undefined') {
			primes[p*c] = false;
			c++;
		}
		
		next_p = false;
		for (var k=p+1; k<=n; k++) {
			// console.log("Checking index %d -> %j for null: %j", k, primes[k], primes[k] === null);
			if (primes[k] === null) {
				next_p = k;
				break;
			}
		}
		
	} while(p = next_p);
	
	var primes_array = [];

	for (var i in primes) {
		if (primes[i]) {
			primes_array.push(parseInt(i));
		}
	}
	
	return primes_array;
	
}