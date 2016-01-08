"use strict";

require('../combinations.js');

describe("Array.combinations", function(){

    it("should generate combinations", function(){
        expect(['1', '2'].combinations(1)).toEqual([['1'], ['2']]);
        expect(['1', '2', '3'].combinations(2)).toEqual([['1', '2'], ['1', '3'], ['2', '3']]);
        expect(function(){ '123'.combinations() }).toThrowError("Must specify a number of elements");
        expect('123'.combinations(2)).toEqual(['12', '13', '23']);
    });

});