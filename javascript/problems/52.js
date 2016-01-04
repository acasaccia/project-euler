// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different
// order. Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

var found = false;
var n = 0;

while (!found) {
    n++;
    var digits = get_digits(n);
    for (var i=2; i<=6; i++) {
        if (!same_digits(get_digits(n*i), digits)) {
            break;
        } else {
            if (i===6) {
                found = true;
            }
        }
    }
}

console.log(n);

function get_digits(n) {
    var digits = [];
    while (n>0) {
        digits.push(n%10);
        n = Math.floor(n/10);
    }
    return digits;
}

function same_digits(digits_1, digits_2) {
    digits_1.sort();
    digits_2.sort();
    return digits_1.join('') === digits_2.join('');
}