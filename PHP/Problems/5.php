<?php

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

#####################################################################
#####################################################################

// Helper functions

// merge 2 factorizations keeping the biggest exponent for each prime factor
function mcm($factors1, $factors2) {
    while ( list($factor,$exponent) = each($factors2) ) {
        if (!array_key_exists($factor, $factors1) or $exponent > $factors1[$factor]) {
            $factors1[$factor] = $exponent;
        }
    }
    return $factors1;
}

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
    while ($c<$ceil) {
        if ($number%$c == 0) {
            return false;
        }
        $c++;
    }
    return true;
}

#####################################################################
#####################################################################

// Algorithm

$numbers = array();

for ($i=2;$i<=20;$i++) {
    $numbers[] = $i;
}

$resultFactors = array();
foreach ($numbers as $number) {
    $primeFactors = factorize($number);
    $resultFactors = mcm($resultFactors, $primeFactors);
}

$result = 1;
foreach ($resultFactors as $factor => $exponent) {
    $result *= pow($factor,$exponent);
}

echo "$result\n";