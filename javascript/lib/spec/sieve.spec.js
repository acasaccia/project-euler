"use strict";

var sieve = require('../sieve.js');

describe("Sieve", function(){

    it("should generate all primes below a given integer", function(){
        expect(sieve(10)).toEqual([ 2, 3, 5, 7 ]);
        expect(sieve(100)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]);
    });

});