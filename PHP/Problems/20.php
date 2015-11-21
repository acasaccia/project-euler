<?php

// n! means n × (n − 1) × ... × 3 × 2 × 1
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits in the number 100!

function multiply($input, $i) {
	$res = '';
	$carry = 0;
	while (strlen($input)) {
		$lastDigit = substr($input, -1, 1);
		$tmp = $lastDigit * $i + $carry;
		$res = substr($tmp, -1, 1) . $res;
		$carry = (int)substr($tmp, 0, strlen($tmp)-1);
		$input = substr($input, 0, strlen($input)-1);
	}
	if ($carry)
		$res = $carry . $res;
	return $res;
}

$res = '1';

for ($i=1; $i<=100; $i++) {
	$res = multiply($res, $i);
}

for ($i=0; $i<strlen($res); $i++) {
	$sum += $res{$i};
}

echo "$sum\n";