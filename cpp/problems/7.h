
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

#include <limits>

class Problem {
public:

	static void solve() {

		int primesFound = 0;
		unsigned long long n = 1;

		while(primesFound < 10001) {
			n++;
			if (isPrime(n))
				primesFound++;
		}

		std::cout << n << std::endl;
	}

private:
	static bool isPrime( unsigned long  long n ) {
		unsigned long c = 2;
		while (c<n) {
			if (n%c == 0) {
				return false;
			}
			c++;
		}
		return true;
	}

};