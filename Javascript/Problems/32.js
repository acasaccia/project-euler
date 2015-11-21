// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.
// The product 7254 is unusual, as the identity, 39 x 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.
// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
// HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

function has_repeating_digits(i) {
	var c;
	var d = [];
	while (i>0) {
		c = i%10;
		if (c==0 || d.indexOf(c)>-1) {
			return true;
		}
		d.push(c);
		i = parseInt(i/10);
	}
	return false;
}

var candidate_products=[];

for (var i=1000; i<10000; i++) {
	if (!has_repeating_digits(i)) {
		candidate_products.push(i);
	}
}

var candidate_product = 0,
	candidate_divisor,
	products = [],
	products_sum = 0,
	candidate_pandigital,
	intRegex = /^\d+$/;

for (var i=0; i<candidate_products.length; i++) {
	candidate_product = candidate_products[i];
	// find all divisors
	for (var j=parseInt(Math.sqrt(candidate_product)); j>0; j--) {
		candidate_divisor = candidate_product/j;
		if(intRegex.test(candidate_divisor)) {
			candidate_pandigital = '';
			// console.log("%d x %d = %d", candidate_divisor, j, candidate_product);
			candidate_pandigital += candidate_divisor;
			candidate_pandigital += j;
			candidate_pandigital += candidate_product;
			// console.log("Is %d pandigital?", candidate_pandigital);
			if (candidate_pandigital.length == 9 && !has_repeating_digits(parseInt(candidate_pandigital))) {
				console.log("Bingo %d", candidate_pandigital);
				if (products.indexOf(candidate_product) == -1) {
					products.push(candidate_product);
					products_sum += candidate_product;
				}
			}
		}
	}
	
}

console.log(products);
console.log(products_sum);
