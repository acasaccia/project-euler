<?php

// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

$numberToWord[1] = 'one';
$numberToWord[2] = 'two';
$numberToWord[3] = 'three';
$numberToWord[4] = 'four';
$numberToWord[5] = 'five';
$numberToWord[6] = 'six';
$numberToWord[7] = 'seven';
$numberToWord[8] = 'eight';
$numberToWord[9] = 'nine';
$numberToWord[10] = 'ten';
$numberToWord[11] = 'eleven';
$numberToWord[12] = 'twelve';
$numberToWord[13] = 'thirteen';
$numberToWord[14] = 'fourteen';
$numberToWord[15] = 'fifteen';
$numberToWord[16] = 'sixteen';
$numberToWord[17] = 'seventeen';
$numberToWord[18] = 'eighteen';
$numberToWord[19] = 'nineteen';
$numberToWord[20] = 'twenty';
$numberToWord[30] = 'thirty';
$numberToWord[40] = 'forty';
$numberToWord[50] = 'fifty';
$numberToWord[60] = 'sixty';
$numberToWord[70] = 'seventy';
$numberToWord[80] = 'eighty';
$numberToWord[90] = 'ninety';
$numberToWord[100] = 'hundred';
$numberToWord[1000] = 'thousand';

function getNumberWord($n) {
	global $numberToWord;	
	switch(true) {
		case $n<=20:
			return $numberToWord[$n];
		case $n<=99:
			$tenth = (int)($n/10);
			$unit = (int)($n%10);
			$res .= $numberToWord[$tenth*10];
			if($unit>0) {
				$res .= $numberToWord[$unit];
			}
			return $res;
		case $n<=999:
			$hundreds = (int)($n/100);
			$units = $n%100;
			$res = $numberToWord[$hundreds];
			$res .= $numberToWord[100];
			if ($units) {
				$res .= 'and' . getNumberWord($units);
			}
			return $res;
		case $n==1000:
			return 'one' . $numberToWord[$n];
		default:
			throw new Exception('WAT?');
	}
}

for ($i=1; $i<=1000; $i++) {
	$words[] = getNumberWord($i);
}

print_r($words);

$res = 0;
foreach ($words as $word) {
	$res += strlen($word);
}

echo $res;
