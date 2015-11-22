// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.
// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.
// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

function find_common_digits(i,j) {
	var common_digits = [],
		d = i%10;
	
	if ( d == j%10) {
//		console.log("found %d in %d", i%10, j);
		common_digits.push(d);
	}
	
	if ( d == parseInt(j/10)) {
//		console.log("found %d in %d", i/10, j);
		common_digits.push(d);
	}
	
	common_digits = common_digits.filter(function (e, i, arr) {
		return arr.lastIndexOf(e) === i;
	});
	
//	if (common_digits.length>0) {
//		console.log("%d/%d found %d common digit" + (common_digits.length>1 ? 's' : '') + ": %d", i, j, common_digits.length, common_digits);
//	}
	
	return common_digits;
}

function remove_digit(n, c) {
	if (n%10 == c) {
		res = parseInt(n/10);
	} else {
		res = n%10;
	}
//	console.log("%d - %d = %d", n, c, res);
	return res;
}

function find_mcd(a, b) {
	var r;
	r = a%b;
	while (r!=0) {
		a=b;
		b=r;
		r=a%b;
	}
	return b;
}

var fractions = [],
	common_digits = [],
	common_digit,
	ri,
	rj,
	num = 1,
	den = 1,
	mcd;

for (var i=10; i<100; i++) {
	for (var j=10; j<100; j++) {
		if (i<j) {
			common_digits = find_common_digits(i,j);
			if (common_digits.length > 0) {
				for (var c=0; c<common_digits.length; c++) {
					common_digit = common_digits[c];
					ri = remove_digit(i,common_digit);
					rj = remove_digit(j,common_digit);
					if (common_digit != 0 && Math.abs(i/j - (ri/rj)) < 0.000000001) {
						console.log("%d/%d = %d <=> %d/%d = %d", i, j, i/j, ri, rj, ri/rj);
						fractions.push([ri,rj]);
					}
				}
			}
		}
	}
}

// console.log(fractions);

for(var i=0; i<fractions.length; i++) {
	num *= fractions[i][0];
	den *= fractions[i][1];
}

console.log("%d/%d", num, den);

mcd = find_mcd(num, den);

console.log("%d", mcd);

num /= mcd;
den /= mcd;

console.log("%d/%d", num, den);