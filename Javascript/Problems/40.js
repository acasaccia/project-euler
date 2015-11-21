// An irrational decimal fraction is created by concatenating the positive integers:
// 0.12345678910(1)112131415161718192021...
// It can be seen that the 12th digit of the fractional part is 1.
// If dn represents the nth digit of the fractional part, find the value of the following expression.
// d1 x d10 x d100 x d1000 x d10000 x d100000 x d1000000

var big_string = '',
	big_array,
	i = 1;

console.log("[Memory heap total %d Kb / used %d Kb]", parseInt(process.memoryUsage().heapTotal / 1024), parseInt(process.memoryUsage().heapUsed / 1024));
	
while (big_string.length < 1000000) {
	big_string += i++;
}

console.log("[Memory heap total %d Kb / used %d Kb]", parseInt(process.memoryUsage().heapTotal / 1024), parseInt(process.memoryUsage().heapUsed / 1024));

big_array = big_string.split('');

console.log(
	parseInt(big_array[0]) *
	parseInt(big_array[9]) *
	parseInt(big_array[99]) *
	parseInt(big_array[999]) *
	parseInt(big_array[9999]) *
	parseInt(big_array[99999]) *
	parseInt(big_array[999999])
);

console.log("[Memory heap total %d Kb / used %d Kb]", parseInt(process.memoryUsage().heapTotal / 1024), parseInt(process.memoryUsage().heapUsed / 1024));
