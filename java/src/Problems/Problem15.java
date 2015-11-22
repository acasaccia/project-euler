// Starting in the top left corner of a 2x2 grid, there are 6 routes (without backtracking) to the bottom right corner.
// How many routes are there through a 20x20 grid?

package Problems;

import java.math.BigInteger;

public class Problem15 implements Problem {

	@Override
	public void solve() {
		// Problem can be seen as the selection of 20 out of 40 cells which fix a potential route
		// (also, the number of routes for each grid size is the vertical center line in Pascal's triangle)
		// C(n,k) = fact(n) / (fact(k) * fact(n-k))
		BigInteger n = new BigInteger("40");
		BigInteger k = new BigInteger("20");
		BigInteger r = fact(n).divide(fact(k).multiply(fact(n.subtract(k))));
		System.out.println(r);
	}

	private BigInteger fact(BigInteger n) {
		if (n.equals(new BigInteger("0"))) return new BigInteger("1");
		else return n.multiply(fact(n.subtract(new BigInteger("1"))));
	}
	
}
