module.exports = function reverse(n) {
    var string = n + "";
    var array_string = string.split("");
    return parseInt(array_string.reverse().join(""));
};