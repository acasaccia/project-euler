<?php

// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// Let us list the factors of the first seven triangle numbers:

// 1: 1
// 3: 1,3
// 6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28

// We can see that 28 is the first triangle number to have over five divisors.
// What is the value of the first triangle number to have over five hundred divisors?

function addFactorizations($factors1, $factors2) {
	while ( list($factor,$exponent) = each($factors2) ) {
		if (!array_key_exists($factor, $factors1)) {
			$factors1[$factor] = $exponent;
		} else {
			$factors1[$factor] += $exponent;
		}
	}
	return $factors1;
}


function factorize($number) {
	$factors = array();
	if (isPrime($number))
		return array($number => 1);
	$ceil = sqrt($number);
	$factor = 2;
	while ($factor<=$ceil) {
		if ($number%$factor==0) {
			$factors = addFactorizations($factors, factorize($factor));
			$factors = addFactorizations($factors, factorize($number/$factor));
			break;
		}
		$factor++;
	}
	return $factors;
}

function isPrime($number) {
	$c = 2;
	$ceil = $number/2;
	while ($c<=$ceil) {
		if ($number%$c == 0) {
			return false;
		}
		$c++;
	}
	return true;
}

function factorial($num){
	$res = 1;
	for ($i=1;$i<=$num;$i++) $res=$res*$i;
	return $res;
}

function getNumberOfDivisors($dividend) {
	$factorization = factorize($dividend);
	//print_r($factorization);
	//echo "\n";
	$divisorsNumber = 1;
	while (list($k,$v) = each($factorization)){
		$divisorsNumber *= $v + 1;
	}
	return $divisorsNumber;
}

$t = 0;
$n = 1;
while (1) {
	$t += $n++;
	$d = getNumberOfDivisors($t);
	//echo "$t -> $d\n";
	//flush();
	if ($d>500) {
		echo "$t\n";
		break;
	}
}
