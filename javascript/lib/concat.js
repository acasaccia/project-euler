var digits = require("./digits.js");

module.exports = function concat(n1, n2) {
    var length_n2 = digits(n2);
    n1 *= Math.pow(10, length_n2);
    return n1 + n2;
};