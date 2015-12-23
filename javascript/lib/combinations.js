"use strict";

var binary = require("./binary.js");

Array.prototype.combinations = function Array_combinations(elements_number) {

    if (!elements_number) {
        throw Error("Must specify a number of elements");
    }

    var combinations_count = Math.pow(2, this.length) - 1;
    var combinations = [];
    var mask, mask_count, combination;

    for (var i=1; i<=combinations_count; i++) {
        combination = [];
        mask = binary(i);
        mask_count = mask.split('1').length - 1;
        if (mask_count === elements_number) {
            while (mask.length < this.length) {
                mask = '0' + mask;
            }
            for (var j=0; j<this.length; j++) {
                if (mask.charAt(j) === '1') {
                    combination.push(this[j]);
                }
            }
            combinations.unshift(combination);
        }
    }

    return combinations;
};

String.prototype.combinations = function String_combinations(elements_number) {
    return this.split('').combinations(elements_number).map(function(item){
        return item.join('');
    });
};