
// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
// Evaluate the sum of all the amicable numbers under 10000.

#include <vector>
#include <set>

class Problem {
public:

	static void solve() {

		int d;

		std::vector<int> sumCache;
		std::set<int> toSkip;
		
		sumCache.reserve(10000);

		for (int c=0; c<=10000; c++) {
			sumCache.push_back(sumOfProperDivisors(c));
		}

		long long sum = 0;

		for (int c=0; c<=10000; c++) {
			if (toSkip.find(c) == toSkip.end()) {
				if (sumCache.at(c) != c) {
					if (sumCache.at(c) <= 10000 && c == sumCache.at(sumCache.at(c))) {
						sum += c + sumCache.at(c);
						std::cout << c << " - " << sumCache.at(c) << std::endl;
						toSkip.insert(sumCache.at(c));
					} else {
						if (c == sumOfProperDivisors(sumCache.at(c))) {
							sum += c + sumCache.at(c);
							std::cout << c << " - " << sumCache.at(c) << std::endl;
							toSkip.insert(sumCache.at(c));
						}
					}
				}
			}
		}

		std::cout << sum << std::endl;

	}

	static int sumOfProperDivisors(int n) {
		int d=0;
		for (int i=1; i<n; i++) {
			if(n%i==0) {
				d+=i;
			}
		}
		return d;
	}

};