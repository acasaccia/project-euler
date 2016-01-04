String.prototype.swap_chars = function(i,j) {
    var array_string = this.split("");
    tmp = array_string[i];
    array_string[i] = array_string[j];
    array_string[j] = tmp;
    return array_string.join("");
};