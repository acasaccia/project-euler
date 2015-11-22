Array.prototype.permutations = function Array_permutations() {
    if (this.length === 1) {
        return [this];
    }
    var permutations = [],
        tmp, fixed, permutation;
    for (var i=0; i<this.length; i++) {
        tmp = this.slice();
        fixed = tmp.splice(i, 1);
        tmp.permutations().forEach(function(partial){
            partial.unshift(fixed[0]);
            permutations.push(partial);
        });
    }
    return permutations;
};

String.prototype.permutations = function permutations() {
    return this.split('').permutations().map(function(item){
        return item.join('');
    });
};