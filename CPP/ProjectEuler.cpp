#include <iostream>
#include <ctime>
#include <vector>

//#include "Problems/1.h"
//#include "Problems/2.h"
//#include "Problems/3.h"
//#include "Problems/6.h"
//#include "Problems/7.h"
//#include "Problems/11.h"
//#include "Problems/21.h"
//#include "Problems/22.h"
//#include "Problems/24.h"
#include "Problems/25.h"

int main(int argc, char** argv) {

	std::vector<std::string> args(argv, argv + argc);

	std::clock_t begin = clock();

	Problem::solve();

	std::clock_t end = clock();
	double elapsed_secs = double(end - begin) / CLOCKS_PER_SEC;

	std::cout << "Done [Elapsed: " << elapsed_secs << "\"]" << std::endl;

	return 0;
}
