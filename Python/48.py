# The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.
#
# Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.

import time

start_time = time.time()

result = 0

for a in range(1,1001):
	result += a**a

print str(result)[-10:]

print "Elapsed: ", round(time.time() - start_time, 3), "\""