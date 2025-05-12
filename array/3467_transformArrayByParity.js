/* 3467. Transform Array by Parity
 * Difficulty - Easy
 *
 * You are given an integer array nums.
 * Transform nums by performing the following operations
 * in the EXACT order specified:
 *
 * Replace each even number with 0.
 * Replace each odd numbers with 1.
 * Sort the modified array in non-decreasing order.
 *
 * Return the resulting array after performing these operations.
 */

let transformArray = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      nums.splice(i, 1, 0);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0 && nums[i] % 2 !== 0) {
      nums.splice(i, 1, 1);
    }
  }
  return nums.sort();
};

// Tests
console.log(transformArray([4, 5, 6, 7, 8])); // Should print [0, 0, 0, 1, 1]
console.log(transformArray([42])); // Should print [0]
console.log(transformArray([27, 101])); // Should print [1, 1]
