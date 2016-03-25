// A common security method used for online banking is to ask the user for three random characters from a passcode. For
// example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be:
// 317.
//
// The text file, keylog.txt, contains fifty successful login attempts.
//
// Given that the three characters are always asked for in order, analyse the file so as to determine the shortest
// possible secret passcode of unknown length.

require("../lib/array_unique");
var logins = require("fs").readFileSync("problems/input/p079_keylog.txt", "utf-8").split("\n").filter(Boolean);

logins = logins.unique();

var rules = [];

for (var i=0; i<logins.length; i++) {
    rules.push(logins[i].charAt(0) + logins[i].charAt(1));
    rules.push(logins[i].charAt(0) + logins[i].charAt(2));
    rules.push(logins[i].charAt(1) + logins[i].charAt(2));
}

rules = rules.unique();

rules = rules.map(function(rule){
    return rule.split("");
});

var passcode = rules.shift();
var tmp;
var reset_index = false;

// Assumption:
// Analyzing input we can assume there are no repeated digits

for (var i=0; i<rules.length; i++) {
    var first_index = passcode.indexOf(rules[i][0]);
    var second_index = passcode.indexOf(rules[i][1]);
    if (first_index > 0 && second_index > 0) {
        if (first_index > second_index) {
            tmp = passcode[first_index];
            passcode[first_index] = passcode[second_index];
            passcode[second_index] = tmp;
            i = 0;
            console.log("Rule %j: swapping to satisfy", rules[i]);
        } else {
            console.log("Rule %j: already satisfied", rules[i]);
        }
    } else {
        if (first_index === -1) {
            console.log("Rule %j: added %j at begin", rules[i], rules[i][0]);
            passcode.splice(0, 0, rules[i][0]);
            reset_index = true;
        }
        if (second_index === -1) {
            console.log("Rule %j: added %j at end", rules[i], rules[i][1]);
            passcode.splice(passcode.length, 0, rules[i][1]);
            reset_index = true;
        }
    }
    if (reset_index) {
        i = 0;
        reset_index = false;
    }
}

console.log(passcode.join(""));