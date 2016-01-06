module.exports = function palindrome(n) {
    var string = String(n);
    while (string.length>1) {
        if (string.charAt(0) === string.charAt(string.length-1)) {
            string = string.substr(1, string.length-2);
        } else {
            return false;
        }
    }
    return true;
};
