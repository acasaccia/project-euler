String.prototype.swap_substr = function(i) {
    return this.substr(0, i) + this.substr(i).split("").reverse().join("");
};