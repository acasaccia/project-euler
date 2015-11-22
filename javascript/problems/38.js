// Take the number 192 and multiply it by each of 1, 2, and 3:
// 192 � 1 = 192
// 192 � 2 = 384
// 192 � 3 = 576
// By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)
// The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).
// What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

var current_max = 0,
	candidate;
	
for(var i=0; i<100000; i++) {
	candidate = '';
	for(var j=1; j<10; j++) {
		candidate += i * j;
		if (candidate.length === 9) {
			candidate = parseInt(candidate);
			if (!has_repeating_digits(candidate)) {
				if (current_max < candidate) {
					current_max = candidate;
				}
			}
			break;
		}
	}
}

console.log("Result: %j", current_max);

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