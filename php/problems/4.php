<?php

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
$res = 0;

for ($i=999; $i>0; $i--)
	for ($j=999; $j>0; $j--) {
		$x = (string) ($i * $j);
		if (substr($x, 0, 3) == strrev(substr($x, 3))) {
			$res = ($x > $res ? $x : $res);
		}
	}

echo "$res";