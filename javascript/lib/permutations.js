exports.generate_permutations = function generate_permutations(array) {
    if (array.length === 1) {
        return array;
    }
    var permutations = [],
        tmp, fixed;
    for (var i=0; i<array.length; i++) {
        tmp = array.slice();
        fixed = tmp.splice(i, 1);
        generate_permutations(tmp).forEach(function(partial){
            permutations.push(fixed + partial);
        });
    }
    return permutations;
}
