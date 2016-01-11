/**
 * Library for arbitrary big integers arithmetic, currently supports only positive numbers
 */

/**
 * Compares two BigIntegers and returns:
 * @param a
 * @param b
 * @returns 1 if a > b, 0 if a = b, -1 if a < b
 */
function compare(a, b) {
    if (a.length !== b.length) {
        return a.length > b.length ? 1 : -1;
    }
    var first_digit_a, first_digit_b;
    while (a.length) {
        first_digit_a = parseInt(a.charAt(0));
        first_digit_b = parseInt(b.charAt(0));
        if (first_digit_a !== first_digit_b) {
            return first_digit_a > first_digit_b ? 1 : -1;
        }
        a = a.substr(1);
        b = b.substr(1);
    }
    return 0;
}

/**
 * Sums two BigIntegers
 * @param a
 * @param b
 * @returns a + b
 */
function add(a, b) {
    if (a.length < b.length) {
        var tmp = a;
        a = b;
        b = tmp;
    }
    var digits_difference = a.length - b.length;
    while (digits_difference > 0) {
        b = '0' + b;
        digits_difference--;
    }
    var me_last_digit, other_last_digit, sum,
        carry = 0,
        result = '';
    for (var i = b.length - 1; i>=0; i--) {
        me_last_digit = parseInt(a.substr(i, 1));
        other_last_digit = parseInt(b.substr(i, 1));
        sum = me_last_digit + other_last_digit + carry;
        carry = parseInt(sum / 10);
        result = (sum % 10) + result;
    }
    result = carry > 0 ? '1' + result : result;
    return trim_leading_zeros(result);
}

/**
 * Subtracts two BigIntegers
 * @param a
 * @param b
 * @returns a - b
 */
function subtract(a, b) {
    if (compare(a, b) < 0) {
        throw new Error('Negative arithmetic unsupported');
    }
    if (a.length < b.length) {
        var tmp = a;
        a = b;
        b = tmp;
    }
    var digits_difference = a.length - b.length;
    while (digits_difference > 0) {
        b = '0' + b;
        digits_difference--;
    }
    var me_last_digit, other_last_digit, sum,
        carry = 0,
        result = '';
    for (var i = b.length - 1; i>=0; i--) {
        me_last_digit = parseInt(a.substr(i, 1));
        other_last_digit = parseInt(b.substr(i, 1));
        sum = me_last_digit + other_last_digit + carry;
        carry = parseInt(sum / 10);
        result = (sum % 10) + result;
    }
    result = carry > 0 ? '1' + result : result;
    return trim_leading_zeros(result);
}

/**
 * Multiplies two BigIntegers
 * @param a
 * @param b
 * @returns a * b
 */
function multiply(a, b) {
    var partials = [];
    var digits_product;
    var carry;
    var iterations;
    for (var i=a.length-1; i>=0; i--) {
        carry = 0;
        iterations = a.length-1 - i;
        partials[i] = '';
        while (iterations>0) {
            partials[i] += '0';
            iterations--;
        }
        for (var j=b.length-1; j>=0; j--) {
            digits_product = parseInt(a.charAt(i)) * parseInt(b.charAt(j)) + carry;
            carry = Math.floor(digits_product / 10);
            digit = digits_product % 10;
            partials[i] = digit + partials[i];
            if (j===0 && carry) {
                partials[i] = carry + partials[i];
            }
        }
    }
    var result = partials.reduce(function(prev, curr){
        return add(prev, curr);
    });
    return trim_leading_zeros(result);
}

/**
 * Divides two BigIntegers
 * @param a
 * @param b
 * @returns a / b
 */
function divide(a, b) {
}

/**
 * Return the remainder of the division of two BigIntegers
 * @param a
 * @param b
 * @returns a % b
 */
function mod(a, b) {

}

/**
 * Elevate base to exponent, currently supports BigInteger base and integer exponent
 * @param base
 * @param exponent
 * @returns a ^ b
 */
function pow(base, exponent) {
    if (exponent === 0) {
        return "1";
    }
    if (exponent === 1) {
        return base;
    }
    if (exponent === 2) {
        return multiply(base, base);
    }
    if (exponent % 2 === 1) {
        return multiply(pow(pow(base, Math.floor(exponent/2)), 2), base);
    } else {
        return pow(pow(base, Math.floor(exponent/2)), 2);
    }
};

function trim_leading_zeros(n) {
    while (n.length > 1 && n.charAt(0) === '0') {
        n = n.substr(1);
    }
    return n;
}

exports.compare = compare;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.mod = mod;
exports.pow = pow;