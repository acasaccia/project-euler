"use strict";

require('../combinations.js');

describe("Array.combinations", function(){

    it("should generate combinations", function(){
        expect(['1', '2'].combinations(1)).toEqual([ ['1'], ['2'] ]);
        expect(['1', '2', '3'].combinations(2)).toEqual([ ['1', '2'], ['1', '3'], ['2', '3'] ]);
        expect([1, 2, 3].combinations()).toEqual([ [ 1 ], [ 2 ], [ 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]);
        expect([1, 2, 3].combinations(2)).toEqual([ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]);
        expect([1, 2, 3, 4, 5].combinations(2)).toEqual([ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ], [ 4, 5 ] ]);
        expect('123'.combinations(2)).toEqual(['12', '13', '23']);
    });

});