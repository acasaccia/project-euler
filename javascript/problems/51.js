// By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43,
// 53, 73, and 83, are all prime. By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number
// is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333,
// 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with
// this property. Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits)
// with the same digit, is part of an eight prime value family.

"use strict";

var is_prime = require("../lib/is_prime.js");
var binary = require("../lib/binary.js");
require("../lib/replaceAt.js");

var n = 1;
var found = false;
var mask_cache = {};
var checked_patterns = {};

while (!found) {
    var masks = get_masks(n),
        pattern;
    masks.forEach(function(mask) {
        var primes = [];
        var candidate;
        pattern = get_pattern(n, mask);
        for (var i=0; i<=9; i++) {
            if (!checked_patterns[pattern] && !(i === 0 && mask.charAt(0) === '1')) {
                candidate = apply_mask(n, mask, i);
                if (is_prime(candidate)) {
                    primes.push(candidate);
                }
            }
        }
        checked_patterns[pattern] = true;
        if (primes.length === 8) {
            found = true;
            console.log("Found %j which generates family: %j", pattern, primes);
        }
    });
    n++;
}

function get_masks(n) {
    var mask_length = String(n).length;
    if (mask_cache[mask_length]) {
        return mask_cache[mask_length];
    }
    var mask_count = Math.pow(2, mask_length);
    var masks = [];
    var mask;
    for (var i=1; i<mask_count; i++) {
        mask = binary(i);
        while (mask.length < mask_length) {
            mask = '0' + mask;
        }
        masks.push(mask);
    }
    mask_cache[mask_length] = masks;
    return masks;
}

function apply_mask(n, mask, c) {
    var string = String(n)
    for (var i=0; i<mask.length; i++) {
        if (mask.charAt(i) === '1') {
            string = string.replaceAt(i, String(c));
        }
    }
    return parseInt(string);
}

function get_pattern(n, mask) {
    var string = String(n)
    for (var i=0; i<mask.length; i++) {
        if (mask.charAt(i) === '1') {
            string = string.replaceAt(i, '*');
        }
    }
    return string;
}