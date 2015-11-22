// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

class Problem {
public:

	static void solve() {

		long accum = 0;

		for (int c=0; c<1000; c++) {
			if (c%5 == 0 || c%3 == 0) {
				accum += c;
			}
		}

		std::cout << accum << std::endl;

	}

};