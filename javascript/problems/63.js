var digits = require("../lib/digits.js");
var total = 0;
var powerful = [];
for (var i=1; i<100; i++) {
    var ar = [];
    for (var j=0; j<100; j++) {
        var pow = Math.pow(i,j);
        if (digits(pow) === j) {
            total++;
            ar.push(1);
            powerful[i+"^"+j] = pow;
        } else {
            ar.push(0);
        }
    }
    console.log("%d -> %j", i, ar);
}
console.log(total);
console.log(powerful);