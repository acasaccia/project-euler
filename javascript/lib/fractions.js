var mcd = require('./mcd.js');

exports.sum = function fractions_sum(n1, d1, n2, d2) {
    var n = n1 * d2 + n2 * d1;
    var d = d1 * d2;
    var mcd_n_d = mcd(n, d);
    return {
        n: n/mcd_n_d,
        d: d/mcd_n_d
    }
};