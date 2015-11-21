/**
 * Created by andrea on 20/11/15.
 */

var n1 = '1',
    n2 = '1',
    c = 2, n;

do {
    c++;
    n = bigint_sum(n1, n2);
    n2 = n1;
    n1 = n;
} while (n.length < 1000);

console.log(c);

function bigint_sum(a, b) {
    var digits_difference = a.length > b.length;
    while (digits_difference > 0) {
        b = '0' + b;
        digits_difference--;
    }
    var a_last_digit, b_last_digit, sum,
        carry = 0,
        result = '';
    for (var i=b.length-1; i>=0; i--) {
        a_last_digit = parseInt(a.substr(i, 1));
        b_last_digit = parseInt(b.substr(i, 1));
        sum = a_last_digit + b_last_digit + carry;
        carry = parseInt(sum / 10);
        result = (sum % 10) + result;
    }
    return carry > 0 ? '1' + result : result;
}