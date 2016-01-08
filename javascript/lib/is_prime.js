"use strict";

var sanitization = require('./sanitization.js');

module.exports = function is_prime(n) {
    if (!sanitization.is_integer(n)) {
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