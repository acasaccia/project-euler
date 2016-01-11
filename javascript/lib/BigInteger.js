/**
 * Sums two positive BigIntegers
 * @param a
 * @param b
 * @returns {*}
 */
exports.add = function add(a, b) {
    if (typeof a !== "String") {
        a = String(a);
    }
    if (typeof b !== "String") {
        b = String(b);
    }
    if (a.length >= b.length) {
        var digits_difference = a.length - b.length;
        while (digits_difference > 0) {
            b = '0' + b;
            digits_difference--;
        }
    } else {
        return add(b, a);
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
    return result;
};

/**
 * Multiplies two positive BigIntegers
 * @param a
 * @param b
 * @returns {*}
 */
exports.multiply = function multiply(a, b) {
    if (typeof a !== "String") {
        a = String(a);
    }
    if (typeof b !== "String") {
        b = String(b);
    }
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
    return partials.reduce(function(prev, curr){
        return exports.add(prev, curr);
    });
};

/**
 * Elevate base to exponent, currently supports BigInteger base and integer exponent
 * @param base
 * @param exponent
 * @returns {*}
 */
exports.pow = function pow(base, exponent) {
    if (typeof base !== "String") {
        base = String(base);
    }
    if (typeof exponent !== "Number") {
        exponent = parseInt(exponent);
    }
    if (exponent === 0) {
        return "1";
    }
    if (exponent === 1) {
        return base;
    }
    if (exponent === 2) {
        return exports.multiply(base, base);
    }
    if (exponent % 2 === 1) {
        return exports.multiply(exports.pow(exports.pow(base, Math.floor(exponent/2)), 2), base);
    } else {
        return exports.pow(exports.pow(base, Math.floor(exponent/2)), 2);
    }
};