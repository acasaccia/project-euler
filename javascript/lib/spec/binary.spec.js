"use strict";

var binary = require('../binary.js');

describe("binary()", function(){

    var pairs = [
        [0, '0'],
        [1, '1'],
        [2, '10'],
        [3, '11'],
        [4, '100'],
        [15, '1111'],
        [30, '11110'],
        [57, '111001'],
        [76, '1001100'],
        [101, '1100101'],
        [124, '1111100']
    ];

    it("should convert to binary", function(){
        pairs.forEach(function(pair){
            expect(binary(pair[0])).toEqual(pair[1]);
        });
    });

});