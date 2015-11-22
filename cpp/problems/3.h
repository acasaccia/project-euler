// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

#include <limits>
#include <cmath>

class Problem {
public:

	static void solve() {

		unsigned long long n = 600851475143;
		unsigned long long largestFactor = static_cast<unsigned long long> ( std::sqrt( static_cast<double>( 600851475143 ) ) );

		while(largestFactor > 1) {
			if (n%largestFactor == 0 && isPrime(largestFactor))
				break;
			largestFactor--;
		}

		std::cout << largestFactor << std::endl;
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
