/**
 * Created by andrea on 25/01/16.
 */

var found = false;
var cube = 0;
var cubes = [];

for (var i=0; i<10000; i++) {
    cube = Math.pow(i, 3);
    cubes.push({
        number: cube,
        digits: (cube + "").split("").sort().join(""),
        base: i
    });
}

cubes.sort(function(a, b){
    if (a.digits === b.digits) {
        return 0;
    }
    return a.digits < b.digits ? 1 : -1;
});

var streak = [];
var current = cubes[0].digits;
var c = 0;
var found = [];
while (cubes[c]) {
    if (cubes[c].digits === current) {
        streak++;
    } else {
        if (streak === 5) {
            var permutations = {};
            for (var i=1; i<=5; i++) {
                permutations[cubes[c-i].base] = cubes[c-i].number;
            }
            found.push(permutations);
            // console.log("Found 5 cube permutations: %j", permutations);
        }
        current = cubes[c].digits;
        streak = 1
    }
    c++;
}

found.sort(function(a, b){
    return Math.min.apply(null, Object.keys(a)) < Math.min.apply(null, Object.keys(b)) ? -1 : 1;
});

console.log(found[0]);