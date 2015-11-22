// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.
//
// {20,48,52}, {24,45,51}, {30,40,50}
//
// For which value of p ≤ 1000, is the number of solutions maximised?

var p, a, b, c, solutions, maxSolutions, result;

maxSolutions = 0;
result = 0;
for (p=2; p<=1000; p+=2) {
    solutions=0;
    console.log("Evaluating combinations for p=%j", p);
    for (a=1; a<=p/3; a++) {
        for(b=a; b<=p-a-b-1; b++) {
            c=p-a-b;
            if(Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)) {
                solutions++;
            }
        }
    }
    if (solutions>maxSolutions) {
        maxSolutions = solutions;
        result = p;
    }
}
console.log("Result: %j", result);