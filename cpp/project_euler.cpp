#include <iostream>
#include <ctime>
#include <vector>

//#include "problems/1.h"
//#include "problems/2.h"
//#include "problems/3.h"
//#include "problems/6.h"
//#include "problems/7.h"
//#include "problems/11.h"
//#include "problems/21.h"
//#include "problems/22.h"
//#include "problems/24.h"
#include "problems/25.h"

int main(int argc, char** argv) {

	std::vector<std::string> args(argv, argv + argc);

	std::clock_t begin = clock();

	Problem::solve();

	std::clock_t end = clock();
	double elapsed_secs = double(end - begin) / CLOCKS_PER_SEC;

	std::cout << "Done [Elapsed: " << elapsed_secs << "\"]" << std::endl;

	return 0;
}
