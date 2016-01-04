// The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.
//
// Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:
//
// d2d3d4=406 is divisible by 2
// d3d4d5=063 is divisible by 3
// d4d5d6=635 is divisible by 5
// d5d6d7=357 is divisible by 7
// d6d7d8=572 is divisible by 11
// d7d8d9=728 is divisible by 13
// d8d9d10=289 is divisible by 17
// Find the sum of all 0 to 9 pandigital numbers with this property.

var permutations,
	permutations_length,
	result = 0;

require("../lib/string_swap_chars.js");
require("../lib/string_swap_substr.js");

permutations = generate_permutations(9);
//permutations = ['1406357289'];

permutations_length = permutations.length;
for ( var i=0; i<permutations_length; i++ ) {
	
	if (
		parseInt(permutations[i].slice(1,4)) % 2 === 0 &&
		parseInt(permutations[i].slice(2,5)) % 3 === 0 &&
		parseInt(permutations[i].slice(3,6)) % 5 === 0 &&
		parseInt(permutations[i].slice(4,7)) % 7 === 0 &&
		parseInt(permutations[i].slice(5,8)) % 11 === 0 &&
		parseInt(permutations[i].slice(6,9)) % 13 === 0 &&
		parseInt(permutations[i].slice(7,10)) % 17 === 0
	) {
		result += parseInt(permutations[i]);
	}
}

console.log("%d", result);

function generate_permutations(n) {
	var permutations,
		last_permutation = '',
		next_permutation = '',
		k, l;
	for(var i=n; i>=0; i--) {
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