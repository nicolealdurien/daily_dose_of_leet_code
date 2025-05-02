/* 1342. Number of Steps to Reduce a Number to Zero
 * Difficulty - Easy
 *
 * Given an integer num, return the number of steps to reduce it to zero.
 *
 * In one step, if the current number is even, you have to divide it by 2,
 * otherwise, you have to subtract 1 from it.
 */

let numberOfSteps = (num) => {
  let steps = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
      steps += 1;
    } else {
      num -= 1;
      steps += 1;
    }
  }

  return steps;
};

// Tests
console.log(numberOfSteps(42)); // Should print 8
console.log(numberOfSteps(27)); // Should print 8
console.log(numberOfSteps(5)); // Should print 4
console.log(numberOfSteps(1)); // Should print 1
console.log(numberOfSteps(0)); // Should print 0
