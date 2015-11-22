
// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
// If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.
// The lexicographic permutations of 0, 1 and 2 are:
// 012   021   102   120   201   210
// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

#include <string>
#include <vector>

class Problem {
public:

	static int factorial(int n) {
		if (n == 0) return 1;
		return (n == 1 ? n : n*factorial(n-1));
	}

	static void solve() {
		
		std::string permutation;
		std::vector<char> elements = std::vector<char>();
		
		elements.push_back('0');
		elements.push_back('1');
		elements.push_back('2');
		elements.push_back('3');
		elements.push_back('4');
		elements.push_back('5');
		elements.push_back('6');
		elements.push_back('7');
		elements.push_back('8');
		elements.push_back('9');

		// The number of permutations of n elements is n!
		// The first (n-1)! = 9! = 362880 permutations will start with '0'
		// So, since we are searching the 1.000.000th permutation we can skip all those
		// that start with '0' and '1' and fix the first digit: '2'
		// (permutations from 725760th to 1088640th start with '2'
		// Reasoning the same way we can fix all others digits.

		int elementsCount = elements.size();
		int permutationsSkipped = 0;
		int permutationsToSkip = 0;

		while (elementsCount = elements.size()) {
			permutationsToSkip = factorial(elementsCount-1);
			for (int c=1; c<=elementsCount; c++) {
				if(permutationsSkipped+permutationsToSkip*(c)>999999 || c == elementsCount) {
					permutation.insert(permutation.end(), elements.at(c-1));
					elements.erase(elements.begin()+c-1);
					permutationsSkipped+=permutationsToSkip*(c-1);
					break;
				}
			}
		}
		std::cout << permutation << std::endl;
	}

};