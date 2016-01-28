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
var combinations = require("../lib/combinations.js");

var words = require('fs').readFileSync('./javascript/problems/input/p098_words.txt', 'utf-8').split(',').map(function(w){
    return w.replace(/\"/g, "");
});

var anagrams = {};
var max_length = 0;

words.forEach(function(w){
    if (w.length > max_length) {
        max_length = w.length;
    }
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

var squares = {};
var c = 0;
var square = 0;
var square_digits = 0;
while (square_digits < max_length + 1) {
    square = c * c;
    var square_digits = digits(square);
    if (squares[square_digits] === undefined) {
        squares[square_digits] = [ square ];
    } else {
        squares[square_digits].push(square);
    }
    c++;
}

var result = 0;
for (var i in anagrams) {
    var digits = i.length;
    for (var k=0; k<squares[digits].length; k++) {
        anagrams[i].combinations(2).forEach(function(c){
            var mapping = find_mapping(squares[digits][k], c[0]);
            if (mapping) {
                var candidate = apply_mapping(mapping, c[1]);
                var match = squares[digits].indexOf(candidate);
                if (match > -1) {
                    console.log("Found match: %s <=> %s", c[0], c[1]);
                    console.log("             %j <=> %j", squares[digits][k], squares[digits][match]);
                    if (squares[digits][k] > result) {
                        result = squares[digits][k];
                    }
                    if (squares[digits][match] > result) {
                        result = squares[digits][match];
                    }
                }
            }
        });
    }
}
console.log(result);

function find_mapping(number, word) {
    var number = "" + number;
    var char_to_digit = {};
    var digit_to_char = {};
    for (var i=0; i<word.length; i++) {
        var char = word.charAt(i);
        var digit = number.charAt(i);
        if (char_to_digit[char] !== undefined && char_to_digit[char] !== digit) {
            return false;
        }
        if (digit_to_char[digit] !== undefined && digit_to_char[digit] !== char) {
            return false;
        }
        char_to_digit[char] = digit;
        digit_to_char[digit] = char;
    }
    return char_to_digit;
}

function apply_mapping(mapping, word) {
    for (var char in mapping) {
        word = word.replace(new RegExp(char, "g"), mapping[char]);
    }
    return parseInt(word);
}