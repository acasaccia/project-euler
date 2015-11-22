<?php

// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
// For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24.
// By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers.
// However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

$abundants = array();
$isAbundant = array();
$result = 0;

function isAbundant($n) {
    $sum = 0;
    for($i=1;$i<$n;$i++) {
        if ($n%$i==0) {
            $sum += $i;
            if ($sum>$n) {
            	return true;
            }
        }
    }
    return false;
}

for ($c=0;$c<=28123;$c++) {
    if (isAbundant($c)) {
        $abundants[] = $c;
        $isAbundant[$c] = true;
    }
}

$abundantsCount = count($abundants);

for ($c=1;$c<=28123;$c++) {
	$isSumOfAbundants = false;
	for ($i=0;$i<$abundantsCount;$i++) {
		$candidate = $c - $abundants[$i];
		if ($candidate>0) {
			if (array_key_exists($candidate, $isAbundant) && $isAbundant[$candidate]) {
				$isSumOfAbundants = true;
				break;
			}
		} else {
			break;
		}
	}
	if (!$isSumOfAbundants) {
		$result += $c;
	}	
}

echo $result . "\n";
