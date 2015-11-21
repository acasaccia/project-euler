<?php

// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
//
// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:
//
// 1x£1 + 1x50p + 2x20p + 1x5p + 1x2p + 3x1p
// How many different ways can £2 be made using any number of coins?

$target = 200;
$res = 1; // the £2 solution

for ($s = 0; $s<=2; $s++)
	for ($d = 0; $d<=4; $d++)
		for ($f = 0; $f<=10; $f++)
			for ($g = 0; $g<=20; $g++)
				for ($h = 0; $h<=40; $h++)
					for ($j = 0; $j<=100; $j++)
						if ($s*100 + $d*50 + $f*20 + $g*10 + $h*5 + $j*2 <= 200)
							// if it's less than 200p we can reach using the right amount of 1p
							$res++;

echo $res . "\n";
