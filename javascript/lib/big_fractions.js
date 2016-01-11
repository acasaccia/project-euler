var BigInteger = require("../lib/BigInteger.js");

exports.sum = function fractions_sum(n1, d1, n2, d2) {
    var n = BigInteger.add(BigInteger.multiply(n1, d2), BigInteger.multiply(n2, d1));
    var d = BigInteger.multiply(d1, d2);
    var mcd = big_mcd(n, d);
    return {
        n: BigInteger.divide(n, mcd),
        d: BigInteger.divide(d, mcd)
    }
};

function big_mcd(a, b) {
    var r;
    if (b === "0") {
        return a;
    }
    while((r = BigInteger.mod(a, b)) !== "0") {
        a = b;
        b = r;
    }
    return b;
}