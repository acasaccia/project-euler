"use strict";

var is_prime = require('../is_prime.js');

describe("is_prime", function(){

    it("should work", function(){
        expect(is_prime(1)).not.toBe(true);
        expect(is_prime(2)).toBe(true);
        expect(is_prime(3)).toBe(true);
        expect(is_prime(4)).not.toBe(true);
        expect(is_prime(5)).toBe(true);
        expect(is_prime(6)).not.toBe(true);
        expect(is_prime(7)).toBe(true);
        expect(is_prime(8)).not.toBe(true);
        expect(is_prime(9)).not.toBe(true);
        expect(is_prime(10)).not.toBe(true);
        expect(is_prime(11)).toBe(true);
        expect(is_prime(1009)).toBe(true);
    });

    it("should sanitize wrong input", function(){
        expect(is_prime('1')).toBe(is_prime(1));
        expect(is_prime('3 this is going to be removed')).toBe(is_prime(3));
        expect(is_prime('nothing')).toBe(is_prime());
        expect(is_prime(3.1342352)).toBe(is_prime(3));
    });

});
