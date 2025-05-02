/* 66. Plus One
 * Difficulty - Easy
 *
 * You are given a large integer represented as an integer array named digits,
 * where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading zeroes.
 *
 * Increment the large integer by one and return the resulting array of digits.
 */

let plusOne = (digits) => {
  digits[digits.length - 1] += 1;

  for (let i = digits.length - 1; i > -1; i--) {
    if (digits[i] === 10 && i !== 0) {
      digits[i] -= 10;
      digits[i - 1] += 1;
    } else if (digits[i] === 10 && i === 0) {
      digits[i] -= 10;
      digits.unshift(1);
    }
  }

  return digits;
};

// Tests
console.log(plusOne([4, 2])); // Should print [4, 3]
console.log(plusOne([8, 6, 7, 5, 3, 0, 9])); // Should print [8, 6, 7, 5, 3, 1, 0]
console.log(plusOne([9, 9, 9, 9, 9, 9, 9])); // Should print [1, 0, 0, 0, 0, 0, 0, 0]
