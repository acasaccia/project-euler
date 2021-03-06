// Triangle, pentagonal, and hexagonal numbers are generated by the following formulae:

// Triangle	 	Tn=n(n+1)/2	 	1, 3, 6, 10, 15, ...
// Pentagonal	Pn=n(3n-1)/2	1, 5, 12, 22, 35, ...
// Hexagonal	Hn=n(2n-1)	 	1, 6, 15, 28, 45, ...
// It can be verified that T285 = P165 = H143 = 40755.

// Find the next triangle number that is also pentagonal and hexagonal.

var n = 285;
var found = false;
var t;
var p = 1;
var h = 1;
var pentagonalIndex = 1;
var hexagonalIndex = 1;

while (!found) {
	n++;
	t = triangle(n);
	if (t>p) {
		pentagonalIndex++;
		p = pentagon(pentagonalIndex);
	}
	if (t>h) {
		hexagonalIndex++;
		h = hexagon(hexagonalIndex);
	}
	console.log('------------');
	console.log(n);
	console.log(t);
	console.log(p);
	console.log(h);
	found = (t == p) && (t == h);
}

console.log(t);

// -----------------------------------------------------

function triangle(n) {
	return n * ( n + 1 ) / 2;
}

function pentagon(n) {
	return n * ( 3 * n - 1 ) / 2;
}

function hexagon(n) {
	return n * ( 2 * n - 1 );
}
