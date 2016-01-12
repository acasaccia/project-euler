"use strict";

var BigInteger = require("../BigInteger.js");

describe("BigInteger", function(){

    it("should compare big integers", function(){

        var a = "15";
        var b = "23";
        expect(BigInteger.compare(a, b)).toBe(-1);
        expect(BigInteger.compare(b, a)).toBe(1);
        expect(BigInteger.compare(b, b)).toBe(0);

        var a = "784678465284567846578465658345683465283658356901058671674";
        var b = "5126754895707856765628564651685682548975646521945619";
        expect(BigInteger.compare(a, b)).toBe(1);
        expect(BigInteger.compare(b, a)).toBe(-1);
        expect(BigInteger.compare(a, a)).toBe(0);
        expect(BigInteger.compare(b, b)).toBe(0);

    });

    it("should sum big integers", function(){

        var a = "162348172356451826548726541287458245187451987459185619874569183475619834718147856";
        var b = "12654458127564812746927569478256197815696254236854182745128451872564236451278451278412784518";
        var c = BigInteger.sum(a, b);
        expect(c).toBe("12654458127727160919284021304804924356983712482041634732587637492438805634754071113130932374");

    });

    it("should subtract big integers", function(){

        var a = "162348172356451826548726541287458245187451987459185619874569183475619834718147856";
        var b = "12654458127564812746927569478256197815696254236854182745128451872564236451278451278412784518";
        var c = BigInteger.sum(a, b);
        expect(BigInteger.subtract(c, a)).toBe(b);
        expect(BigInteger.subtract(c, b)).toBe(a);

        var a = "100";
        var b = "33";
        var c = "0";
        var d = "10";
        expect(BigInteger.subtract(a, b)).toBe("67");
        expect(BigInteger.subtract(a, c)).toBe("100");
        expect(BigInteger.subtract(b, d)).toBe("23");
        expect(function(){BigInteger.subtract(c, b)}).toThrow();

    });

    it("should multiply big integers", function(){

        var a = "15";
        var b = "23";
        var c = BigInteger.multiply(a, b);
        expect(c).toBe("345");

        var a = "784678465284567846578465658345683465283658356901058671674";
        var b = "5126754895707856765628564651685682548975646521945619";
        var c = BigInteger.multiply(a, b);
        expect(c).toBe("402285416345418573590047796203202966171676444647468972699220473061889337067311509648608571138" +
            "2041546203696206");

    });

    it("should divide big integers", function(){

        var a = "100";
        var b = "20";
        var c = BigInteger.divide(a, b);
        expect(c).toBe("5");

        var a = "1000000000000000000000005";
        var b = "20";
        var c = BigInteger.mod(a, b);
        expect(c).toBe("5");

        var a = "105";
        var b = "20";
        var c = BigInteger.mod(a, b);
        expect(c).toBe("5");

        var a = "20";
        var b = "100";
        var c = BigInteger.divide(a, b);
        expect(c).toBe("0");

        var a = "12";
        var b = "1";
        var c = BigInteger.divide(a, b);
        expect(c).toBe("12");

        var a = "784678465284567846578465658345683465283658356901058671674";
        var b = "5126754895707856765628564651685682548975646521945619";
        var c = BigInteger.multiply(a, b);
        expect(BigInteger.divide(c, a)).toBe(b);
        expect(BigInteger.divide(c, b)).toBe(a);

    });

    it("should elevate to power", function(){

        var c = BigInteger.pow("99", 99);
        expect(c).toEqual("369729637649726772657187905628805440595668764281741102430259972423552570455277523421410650" +
            "01012823272794097888954832654011942999676949435945162157019364401441807106066765930138499977999915920049" +
            "9899");

    });

});