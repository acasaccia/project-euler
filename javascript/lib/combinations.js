"use strict";

Array.prototype.combinations = function Array_combinations(elements_number) {

};

String.prototype.combinations = function String_combinations(elements_number) {
    return this.split('').combinations(elements_number).map(function(item){
        return item.join('');
    });
};