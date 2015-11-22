
// Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.
// What is the total of all the name scores in the file?

#include <set>
#include <cstring>
#include <string>
#include <fstream>

class Problem {
public:

	static void solve() {
		std::set<std::string> dictionary;
		long long score = 0;

		std::ifstream inputFile;
		inputFile.open("data/names.txt");

		char tmpChar;
		char buffer[50];
		std::string tmpString;

		while (inputFile.getline(buffer, 50, ',')) {
			tmpString.append(buffer);
			tmpString = tmpString.substr(1,tmpString.length()-2);
			dictionary.insert(tmpString);
			// std::cout << tmpString << std::endl;
			tmpString.clear();
		}

		int line = 0;

		for(std::set<std::string>::const_iterator it = dictionary.cbegin(); it != dictionary.cend(); it++) {
			line++;
			// std::cout << *it << std::endl;
			for (int c=0; c<std::strlen(it->data()); c++) {
				tmpChar = it->data()[c];
				score += ((int)tmpChar - 64) * line;
				//std::cout << tmpChar << " -> " << (int)tmpChar - 64 << std::endl;
			}
		}

		std::cout << score << std::endl;
	}

};
