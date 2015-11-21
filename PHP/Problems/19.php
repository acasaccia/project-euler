<?php

// You are given the following information, but you may prefer to do some research for yourself.
// 
// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// 
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

$days_in_month = array(
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
);

function is_leap($year) {
	return $year%4 == 0 and ($year%100 != 0 or $year%400 == 0);
}

$month_names = array('jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec');
$day_names = array('mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun');

$sundays_on_the_first = 0;
$day = 0;
for ($year = 1900; $year < 2001; $year++) {
	for ($month = 0; $month < 12; $month++) {
		// if ($year == 1901) {
			// http://www.timeanddate.com/calendar/?year=1901&country=9
			// echo "The 1st of " . $month_names[$month] . "/" . $year . " is a " . $day_names[$day] . "\n";
		// }
		$day += $days_in_month[$month];
		if($month==1 and is_leap($year)) {
			$day++;
		}
		$day%=7;
		if ($day == 6 and $year>1900) {
			$sundays_on_the_first++;
		}
	}
}

echo "$sundays_on_the_first\n";