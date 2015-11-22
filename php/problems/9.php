<?php

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

for ($i=0;$i<1000;$i++)
	for ($j=0;$j<1000;$j++) {
		if ($i!=$j) {
			$k = 1000 - ($i + $j);
			if ($k != $i && $k != $j && $i*$i + $j*$j == $k*$k) {
				echo $i * $j * $k;
				exit();
			}
		}
	}