"use strict";

Array.prototype.combinations = function Array_combinations(elements_number) {
    if (elements_number === undefined) {
        var combinations = [];
        for (var i=1; i<=this.length; i++) {
            combinations = combinations.concat(k_over_n_combinations(this, i));
        }
        return combinations;
    } else {
        return k_over_n_combinations(this, elements_number);
    }
};

function k_over_n_combinations(array, elements_number) {
    var combinations = [];
    if (elements_number === 1) {
        for (var i=0; i<array.length; i++) {
            combinations.push([array[i]]);
        }
    } else {
        var tmp;
        var fixed;
        for (var i=0; i<array.length; i++) {
            tmp = array.slice();
            fixed = tmp.splice(0, i);
            if (fixed[i-1] !== undefined) {
                k_over_n_combinations(tmp, elements_number-1).forEach(function(partial){
                    partial.unshift(fixed[i-1]);
                    combinations.push(partial);
                });
            }
        }
    }
    return combinations;
}

String.prototype.combinations = function String_combinations(elements_number) {
    return this.split('').combinations(elements_number).map(function(item){
        return item.join('');
    });
};