// The following iterative sequence is defined for the set of positive integers:
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.

package Problems;

public class Problem14 implements Problem {

	@Override
	public void solve() {
 		Long n = 1000000L;
 		Long maxSequence = 0L;
 		Long maxSeed = 0L;
		Long sequence = 0L;
		Long c;
		while (n>0L) {
			c = n;
			sequence = 0L;
			while (c!=1L) {
			    if (c%2==0L) {
			        c/=2L;
			    } else {
			        c=c*3L+1L;
			    }
			    sequence++;
			}
			if (sequence > maxSequence) {
				maxSequence = sequence;
				maxSeed = n;
			}
			n--;
			// System.out.println(n + " -> " + sequence);
		}
		System.out.println(maxSeed + " -> " + maxSequence);
	}

}
