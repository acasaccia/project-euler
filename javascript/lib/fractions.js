exports.sum = function fractions_sum(n1, d1, n2, d2) {
    var n = n1 * d2 + n2 * d1;
    var d = d1 * d2;
    var _mcd = mcd(n, d);
    return {
        n: n/_mcd,
        d: d/_mcd
    }
};