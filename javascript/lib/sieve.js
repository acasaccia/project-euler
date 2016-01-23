module.exports = function(n, return_map) {
    var primes = {};
    var p = 2;
    var next_p;
    do {
        primes[p] = true;
        var c = 1;
        while (p*c <= n) {
            if (primes[p*c] === undefined) {
                primes[p*c] = false;
            }
            c++;
        }
        next_p = false;
        for (var k=p+1; k<=n; k++) {
            // console.log("Checking index %d -> %j for null: %j", k, primes[k], primes[k] === null);
            if (primes[k] === undefined) {
                next_p = k;
                break;
            }
        }
    } while(p = next_p);

    if (return_map) {
        return primes;
    }

    var primes_array = [];
    for (var i in primes) {
        if (primes[i]) {
            primes_array.push(parseInt(i));
        }
    }
    return primes_array;
};