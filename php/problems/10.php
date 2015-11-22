<?php

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

set_time_limit(60);
ini_set("memory_limit","256M");

$candidates = array();

// http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

for ($i=2;$i<2000000;$i++) {
	if (
		$i%2!=0 &&
		$i%3!=0 &&
		$i%5!=0 &&
		$i%7!=0
	) {
		$candidates[] = $i;
	}
}

$res = 2 + 3 + 5 + 7;

while ($c = array_shift($candidates)) {
	$res += $c;
	if ($c*$c > 2000000) {
		break;
	}
	while (list($k, $n) = each($candidates) ) {
		if ($n%$c == 0) {
			unset($candidates[$k]);
		}
	}
}

$res += array_sum($candidates);

echo "$res\n";
