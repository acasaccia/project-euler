"use strict";

var digits = require('../digits.js');

describe("digits", function(){

    it("should count integers digits", function(){
        expect(digits(0)).toBe(1);
        expect(digits(123)).toBe(3);
        expect(digits(12345)).toBe(5);
        expect(digits(1234567890)).toBe(10);
    });

});
