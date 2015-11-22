var sanitization = require('./sanitization.js');

exports.is_prime = function is_prime(n) {
    if (!sanitization.is_integer(n)) {
        console.warn("%j is not an integer casting to %d", n, parseInt(n));
        n = parseInt(n);
    }
    if (n < 2 || isNaN(n)) {
        return false;
    }
    var limit = Math.sqrt(n),
        i = 2;
    while (i <= limit) {
        if (n % i == 0) {
            return false;
        }
        i++;
    }
    return true;
};