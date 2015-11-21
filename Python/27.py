# -*- coding: utf-8 -*-

# Euler published the remarkable quadratic formula:
#
# n² + n + 41
#
# It turns out that the formula will produce 40 primes for the consecutive values n = 0 to 39. However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41² + 41 + 41 is clearly divisible by 41.
#
# Using computers, the incredible formula  n² − 79n + 1601 was discovered, which produces 80 primes for the consecutive values n = 0 to 79. The product of the coefficients, −79 and 1601, is −126479.
#
# Considering quadratics of the form:
#
#    n² + an + b, where |a| < 1000 and |b| < 1000
#
#    where |n| is the modulus/absolute value of n
#    e.g. |11| = 11 and |−4| = 4
#
# Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.

import time

start_time = time.time()

def isPrime( n ):
	n = abs(n)
	c = 2
	ceil = n / 2
	while c <= ceil:
		if n%c == 0:
			#print "n is not prime ", n
			return False
		c+=1
	#print "n is prime ", n
	return True
   
def quadratic( a, b, n ):
	#print "quadratic (", a, b, n, ")"
	return n * n + a * n + b

result = 0
max_n = 0

for a in range(-999,1000):
	for b in range(-999,1000):
		n = 0
		while (isPrime(quadratic(a,b,n))):
			n+=1
		if n > max_n:
			max_n = n
			result = a * b
			#print "Found a new max: ", n
			#print "a = : ", a
			#print "b = : ", b
			#print "a * b = : ", result

print "Elapsed: ", round(time.time() - start_time, 3), "\""
print "Result: ", result