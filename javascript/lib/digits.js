module.exports = function digits(n) {
    if (n < 10) {
        return 1;
    }
    return Math.floor(Math.log10(n) + 1);
};