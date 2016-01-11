module.exports = function mcd(a, b) {
    var r;
    if (b === 0) {
        return a;
    }
    while(r = (a % b)) {
        a = b;
        b = r;
    }
    return b;
};