<?php

// A unit fraction contains 1 in the numerator.
// The decimal representation of the unit fractions with denominators 2 to 10 are given:
//
// 1/2 =  0.5
// 1/3 =  0.(3)
// 1/4 =  0.25
// 1/5 =  0.2
// 1/6 =  0.1(6)
// 1/7 =  0.(142857)
// 1/8 =  0.125
// 1/9 =  0.(1)
// 1/10 =  0.1

// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle.
// It can be seen that 1/7 has a 6-digit recurring cycle.
// Find the value of d<1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

function find_recurring_cycle($digits) {
	$last_digit = array_pop($digits);
	$recurring_digit_position = array_search($last_digit, $digits);
	if ($recurring_digit_position !== false) {
		return count($digits) - $recurring_digit_position;
	}
	return 0;
}

function get_recurring_cycle($n) {
	$decimal_digits = array();
	$numerators_cache = array();
	$numerator = 1;
	$denominator = $n;
	$recurring_cycle = 0;
// 	$c = 0;
	while($recurring_cycle == 0 and $numerator != 0
// 	and $c<10
	) {
		$numerator *= 10;
		while ($numerator<$denominator) {
			$numerator *= 10;
			$decimal_digits[] = 0;
		}
		$next_digit = intval($numerator / $denominator);
		$decimal_digits[] = $next_digit;
		if (!array_key_exists($numerator, $numerators_cache)) {
			$numerators_cache[$numerator] = count($decimal_digits);
		} else {
			// if we ever encounter the same numerator twice, we are in a cycle
			$recurring_cycle = count($decimal_digits) - $numerators_cache[$numerator];
		}
		$numerator = $numerator % $denominator;
// 		$c++;
	}
// 	echo '0.' . implode('', $decimal_digits) . "\n";
// 	echo "-> $recurring_cycle\n";
	return array(
		'cycle' => $recurring_cycle,
		'digits' => $decimal_digits
	);
}

$max_recurring_cycle = 0;

for ($i=2; $i<=1000; $i++) {
	$recurring_cycle_data = get_recurring_cycle($i);
	if ($recurring_cycle_data['cycle'] > $max_recurring_cycle) {
		$max_recurring_cycle = $recurring_cycle_data['cycle'];
		$max_recurring_cycle_d = $i;
// 		echo "Found new longest recurring cycle: $max_recurring_cycle\n";
// 		echo "1/$i = 0." . implode($recurring_cycle_data['digits']) . "\n";
	}
}

echo "$max_recurring_cycle_d\n";