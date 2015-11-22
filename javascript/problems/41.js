// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.
// What is the largest n-digit pandigital prime that exists?

var start = new Date(), end, elapsed, partial,
	candidates, candidates_length, solution_found;

// order 9 and 8 pandigitals are trivially non prime (sum of digit divides 9 so they all divide 9)
for (var i=7; i>0; i--) {
	
	// get all order i pandigitals
	candidates = generate_permutations(i);
	
	console.log("Generated %d permutations with %d elements", candidates.length, i);
	
	// filter out those trivially non prime
	candidates = candidates.filter(function(item){
		item = parseInt(item);
		return (
			item % 2 !== 0 &&
			item % 3 !== 0 &&
			item % 5 !== 0 &&
			item % 7 !== 0 &&
			item % 11 !== 0 &&
			item % 13 !== 0 &&
			item % 17 !== 0 &&
			item % 19 !== 0
		)
	});
	
	console.log("%d permutations left after filtering", candidates.length);
	
	partial = new Date();
	elapsed = new Date();

	elapsed.setTime(partial.getTime() - start.getTime());
	console.log("[Time to get %d items permutations: %d\"]", i, elapsed.getTime() / 1000);
	
	candidates_length = candidates.length;
	
	for (var j=0; j<candidates_length; j++) {
		if(is_prime(parseInt(candidates[j]))) {
			solution_found = true;
			console.log("%d is prime", candidates[j]);
			break;
		}
	}
	
	if (solution_found) {
		break;
	}
}

end = new Date();
elapsed = new Date();

elapsed.setTime(end.getTime() - start.getTime());
console.log("[Elapsed %d\"]", elapsed.getTime() / 1000);

/////////////////////////////////////////////////////////////////

function generate_permutations(n) {
	var permutations = [],
		last_permutation = '',
		next_permutation = '',
		k, l, tmp;
	for(var i=n; i>0; i--) {
		last_permutation += i;
	}
	permutations = [last_permutation];
	while((k = get_next_k(last_permutation)) !== false) {
		l = get_next_l(last_permutation, k);
		next_permutation = last_permutation;
		next_permutation = next_permutation.swap_chars(k,l)
		next_permutation = next_permutation.swap_substr(k+1);
		permutations.push(next_permutation);
		last_permutation = permutations[permutations.length-1];
	}
	return permutations;
}

function get_next_k(permutation) {
	var permutation_length = permutation.length;
	for(var k=permutation_length-2; k>=0; k--) {
		if(permutation[k]>permutation[k+1]) {
			return k;
		}
	}
	return false;
}

function get_next_l(permutation, k) {
	var permutation_length = permutation.length;
	for(var l=permutation_length-1; l>=0; l--) {
		if(permutation[k]>permutation[l]) {
			return l;
		}
	}
	throw Exception('WTF?');
}

function is_prime(n) {
	if (n == 1) {
		return false;
	}
	var i = Math.floor(Math.sqrt(n));
	while(i>1) {
		if (n%i==0) {
			return false;
		}
		i--;
	}
	return true;
}