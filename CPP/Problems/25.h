
// The Fibonacci sequence is defined by the recurrence relation:
//    Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:
//
//    F1 = 1
//    F2 = 1
//    F3 = 2
//    F4 = 3
//    F5 = 5
//    F6 = 8
//    F7 = 13
//    F8 = 21
//    F9 = 34
//    F10 = 55
//    F11 = 89
//    F12 = 144
//
// The 12th term, F12, is the first term to contain three digits.
// What is the first term in the Fibonacci sequence to contain 1000 digits?

#include <string>
#include <sstream>
#include <vector>
#include <algorithm>

class Problem {
public:

	// Yep, name is for the lulz
	static std::string big_big_big_numbers_sum(std::string n, std::string m) {
		
		std::stringstream ret;
		int length_difference = n.length()-m.length();
		
		if (length_difference!=0) {
			if (length_difference>0) {
				m.insert(0, length_difference, '0');
			} else {
				n.insert(0, length_difference, '0');
			}
		}

		char carry = 0;

		while(n.length()) {
			char digit1 = n.c_str()[n.length()-1];
			char digit2 = m.c_str()[m.length()-1];
			n.pop_back();
			m.pop_back();
			char tmp1 = std::atoi(&digit1);
			char tmp2 = std::atoi(&digit2);
			char sum = tmp1+tmp2+carry;
			ret << sum%10;
			carry = sum/10;
		}

		if (carry)
			ret << 1;

		std::string return_string = ret.str();
		std::reverse(return_string.begin(), return_string.end());
		return return_string;
	}

	static void solve() {
		std::string n1 = std::string("1");
		std::string n2 = std::string("1");
		std::string n = std::string("");
		int c = 2;
		
		do {
			c++;
			n = big_big_big_numbers_sum(n1, n2);
			std::cout << n << std::endl;
			n2 = n1;
			n1 = n;
		} while (n.length() < 10);

		std::cout << c << std::endl;
	}

};
