// If a box contains twenty-one coloured discs, composed of fifteen blue discs and six red discs, and two discs were
// taken at random, it can be seen that the probability of taking two blue discs, P(BB) = (15/21)×(14/20) = 1/2.
//
// The next such arrangement, for which there is exactly 50% chance of taking two blue discs at random, is a box
// containing eighty-five blue discs and thirty-five red discs.
//
// By finding the first arrangement to contain over 10^12 = 1,000,000,000,000 discs in total, determine the number of
// blue discs that the box would contain.

// x / (x + y) ~ sqrt(2)
// (x - 1) / (x + y - 1) ~ sqrt(2)

var discs = 1000000000000,
    epsilon = 10,
    found = 0;

while (found<5) {
    var estimated_b = parseInt(discs * Math.sqrt(0.5));
    for (var b = estimated_b - epsilon; b < estimated_b + epsilon; b++) {
        var ratio1 = b / discs;
        var ratio2 = (b - 1) / (discs - 1);
        if ( ratio1*ratio2  === 0.5) {
            console.log("Arrangement found: total %d, %d blue disks, %d red disks", discs, b, discs - b);
            found++;
        }
    }
    discs++;
}


