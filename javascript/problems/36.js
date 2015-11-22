// The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
// (Please note that the palindromic number, in either base, may not include leading zeros.)

var palidromic_base_ten = [1,2,3,4,5,6,7,8,9],
	sum = 0;

function to_base_two(n) {
	var base_two = '';
	while(n>0) {
		base_two = n%2 + base_two;
		n = parseInt(n/2, 10);
	}
	if (base_two.indexOf('0') === 0) {
		return base_two.substr(1);
	} else {
		return base_two;
	}	
}

function is_palindromic(string) {
	if (string.length%2==0) {
		return string.substr(0, string.length/2).split('').reverse().join('') === string.substr(string.length/2);
	} else {
		return string.substr(0, parseInt(string.length/2)).split('').reverse().join('') === string.substr(parseInt(string.length/2)+1);
	}
}

for (var i=1;i<1000; i++) {
	if (i<100) {
		for (var j=0;j<10; j++) {
			palidromic_base_ten.push(parseInt(i + j.toString() + i.toString().split('').reverse().join(''), 10));
		}
	}
	palidromic_base_ten.push(parseInt(i + i.toString().split('').reverse().join(''), 10));
}

for (var i=0;i<palidromic_base_ten.length; i++) {
	if (is_palindromic(to_base_two(palidromic_base_ten[i]))) {
		console.log("That's right: %s and %s are both palindromic", palidromic_base_ten[i], to_base_two(palidromic_base_ten[i]));
		sum += palidromic_base_ten[i];
	}
}

console.log(sum);