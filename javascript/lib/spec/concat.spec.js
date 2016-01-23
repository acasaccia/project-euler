"use strict";

var concat = require('../concat.js');

describe("concat", function(){

    it("should concat integers", function(){
        expect(concat(123, 456)).toBe(123456);
        expect(concat(12345, 67890)).toBe(1234567890);
        expect(concat(123456789, 123456789)).toBe(123456789123456789);
    });

});
