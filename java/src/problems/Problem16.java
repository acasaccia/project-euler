// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

package problems;

public class Problem16 implements Problem {

	@Override
	public void solve() {
		String result = "1";
		String tmp;
		Integer carry;
		Integer digit;
		
		// I could do it with BigInteger but it wouldn't be fun so I
		// calculate 2^1000 storing the big number in a String
		for (Integer i=0; i<1000; i++) {
			carry = 0;
			tmp = result;
			result = "";
			while (tmp.length()>0) {
				Character c = tmp.charAt(tmp.length()-1);
				tmp = tmp.substring(0, tmp.length()-1);
				digit = Character.getNumericValue(c);
				digit = digit * 2 + carry;
				result = ((Integer)(digit % 10)).toString() + result;
				carry = digit / 10;
			}
			if (carry == 1)
				result = carry.toString() + result;
		}
		
		Integer sum = 0;
		
		// now sum its digits
		while (result.length()>0) {
			Character c = result.charAt(result.length()-1);
			result = result.substring(0, result.length()-1);
			digit = Character.getNumericValue(c);
			sum += digit;
		}
		
		System.out.println(sum);
		
	}

}
