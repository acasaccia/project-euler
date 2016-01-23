module.exports = function digits(n) {
    if (n < 1) {
        return 1;
    }
    return Math.floor(Math.log10(n) + 1);
};