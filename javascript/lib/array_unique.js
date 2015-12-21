"use strict";

Array.prototype.unique = function Array_unique() {
    var unique = [];
    for (var i = 0; i < this.length; i++) {
        if (unique.indexOf(this[i]) === -1) {
            unique.push(this[i]);
        }
    }
    return unique;
};