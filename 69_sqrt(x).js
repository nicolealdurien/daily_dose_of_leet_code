/* 69. Sqrt(x)
 * Difficulty - Easy
 *
 * Given a non-negative integer x,
 * return the square root of x rounded down to the nearest integer.
 * The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 */

let mySqrt = (x) => {
  if (x === 0 || x === 1) return x;

  let squareCandidate = 0;

  for (let i = 1; i < x; i++) {
    if (i * i > x) {
      return squareCandidate;
    } else {
      squareCandidate = i;
    }
  }

  return squareCandidate;
};

// Tests
console.log(mySqrt(0)); // Should print 0
console.log(mySqrt(1)); // Should print 1
console.log(mySqrt(2)); // Should print 1
console.log(mySqrt(3)); // Should print 1
console.log(mySqrt(16)); // Should print 4
console.log(mySqrt(64)); // Should print 8
console.log(mySqrt(65)); // Should print 8
console.log(mySqrt(100)); // Should print 10
console.log(mySqrt(277729)); // Should print 527
