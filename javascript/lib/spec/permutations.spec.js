"use strict";

require('../permutations.js');

describe("Array.permutations", function(){

    it("should generate permutations", function(){
        expect(['1', '2'].permutations()).toEqual([['1', '2'], ['2', '1']]);
        expect('123'.permutations()).toEqual(['123','132','213','231','312','321']);
    });

});