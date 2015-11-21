
// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
//
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
//
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

class Problem {
public:

	static void solve() {

		int result = 0;
		int sum = 0;

		for (int c=1; c<=100; c++) {
			result += static_cast<int>(c*c);
			sum += c;
		}

		result = sum * sum - result;
		std::cout << result << std::endl;
	}

};