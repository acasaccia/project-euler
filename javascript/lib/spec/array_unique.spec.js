"use strict";

require('../array_unique.js');

describe("Array.unique()", function(){

    it("should eliminate duplicates", function(){
        expect(['1', '2', '2', '3'].unique()).toEqual(['1', '2', '3']);
        expect([3, 1, 2, 2, 3, 3, 3, 4, 5].unique()).toEqual([3, 1, 2, 4, 5]);
    })
    
});