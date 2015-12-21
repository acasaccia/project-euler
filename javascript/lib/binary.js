"use strict";

module.exports = function binary(n) {
    var binary = [];
    while (n > 0) {
        binary.unshift(n%2);
        n = parseInt(n/2);
    }
    return binary.join('');
};