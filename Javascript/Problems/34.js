// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Find the sum of all numbers which are equal to the sum of the factorial of their digits.
// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

var cap = 2540160, // 9! + 9! + 9! + 9! + 9! + 9! + 9! is < 2540160 so we can safely start from here
	factorials = [],
	curious_numbers = [],
	result = 0;

function factorial(i) {
	var result = 1;
	while(i>1){
		result*=i;
		i--;
	}
	return result;
}

factorials.push(factorial(0));
factorials.push(factorial(1));
factorials.push(factorial(2));
factorials.push(factorial(3));
factorials.push(factorial(4));
factorials.push(factorial(5));
factorials.push(factorial(6));
factorials.push(factorial(7));
factorials.push(factorial(8));
factorials.push(factorial(9));

function get_digits(i) {
	var digits = [];
	while (i>0) {
		digits.push(i%10);
		i = parseInt(i/10);
	}
	return digits;
}

function sum_of_digits_factorial(i) {
	var digits = get_digits(i),
		sum = 0;
	//console.log('Digits of %d: %d', i, digits);
	for (var j=0; j<digits.length; j++) {
		sum += factorials[digits[j]];
		//console.log('factorial(%d): %d', digits[j], factorials[digits[j]]);
	}
	//console.log('Sum of digits factorials: %d', sum);
	return sum;
}

for (var i=cap; i>2; i--) {
	if (sum_of_digits_factorial(i) == i) {
		console.log('Bingo: %d',i);
		curious_numbers.push(i);
	}
}

while (curious_numbers.length) {
	result += curious_numbers.pop();
}

console.log(result);