// By replacing each of the letters in the word CARE with 1, 2, 9, and 6 respectively, we form a square number:
// 1296 = 36^2.
// What is remarkable is that, by using the same digital substitutions, the anagram, RACE, also forms a square number:
// 9216 = 96^2. We shall call CARE (and RACE) a square anagram word pair and specify further that leading zeroes are not
// permitted, neither may a different letter have the same digital value as another letter.
//
// Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common
// English words, find all the square anagram word pairs (a palindromic word is NOT considered to be an anagram of
// itself).
//
// What is the largest square number formed by any member of such a pair?
//
// NOTE: All anagrams formed must be contained in the given text file.

var digits = require("../lib/digits.js");

var words = require('fs').readFileSync('./javascript/problems/input/p098_words.txt', 'utf-8').split(',').map(function(w){
    return w.replace(/\"/g, "");
});

var anagrams = {};

words.forEach(function(w){
    var letters = w.split("");
    letters.sort();
    letters = letters.join("");
    if (anagrams[letters] === undefined) {
        anagrams[letters] = [w];
    } else {
        anagrams[letters].push(w);
    }
});

for (var i in anagrams) {
    if (anagrams[i].length < 2) {
        delete(anagrams[i]);
    }
}

var squares = [];
var c = 0;
var last = 0;
while (digits(last) < 15) { // longest word is 14
    last = c * c;
    squares[c] = last;
    c++;
}

var result = 0;
for (var i in anagrams) {
    var c = 0;
    var square_digits = digits(squares[c]);
    while(square_digits <= i.length) {
        if (square_digits === i.length) {
            if (normalize(i).join(",") === normalize(squares[c]).join(",")) {
                var mapped = map(i, squares[c]);
                if (squares.indexOf(mapped)) {
                    if (squares[c] > result) {
                        console.log("New maximum: %j -> %j", squares[c], anagrams[i]);
                        result = squares[c];
                    }
                }
            }
        }
        square_digits = digits(squares[++c]);
    }
}
console.log(result);

function normalize(n) {
    n = "" + n;
    var normalized = [];
    while(n.length) {
        var letter = n.charAt(0);
        var occurrences = n.split(letter).length  - 1;
        normalized.push(occurrences);
        var regexp = new RegExp(letter, "g");
        n = n.replace(regexp, "");
    }
    return normalized.sort();
}

function map(from, to) {
    to = "" + to;
    for (var i=0; i<from.length; i++) {
        var letter = from.charAt(i);
        var number = parseInt(letter);
        if (isNaN(number)) {
            from = from.replace(new RegExp(letter, "g"), to.charAt(i));
        }
    }
    return parseInt(from);
}