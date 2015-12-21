"use strict";

var binary = require("./binary.js");

Array.prototype.combinations = function Array_combinations(elements_number) {

    if (!elements_number) {
        throw Error("Must specify a number of elements");
    }

    var combinations_count = Math.pow(2, this.length) - 1;
    var combinations = [];
    var mask, combination;

    for (var i=1; i<=combinations_count; i++) {
        combination = [];
        mask = binary(i);
        while (mask.length < this.length) {
            mask = '0' + mask;
        }
        for (var j=0; j<this.length; j++) {
            if (mask.charAt(j) === '1') {
                combination.push(this[j]);
            }
        }
        combinations.push(combination);
    }

    return combinations;
};

String.prototype.combinations = function String_combinations(elements_number) {
    return this.split('').combinations(elements_number).map(function(item){
        return item.join('');
    });
};