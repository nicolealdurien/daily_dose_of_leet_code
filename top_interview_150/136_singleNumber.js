/* 136. Single Number
 * Easy
 *
 * Given a non-empty array of integers nums, every element appears twice except for one.
 * Find that single one.
 *
 * You must implement a solution with a linear runtime complexity
 * and use only constant extra space.
 */

let singleNumber = (nums) => {
  let first = {};
  let doubles = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in first) {
      doubles[nums[i]] = 1;
    } else {
      first[nums[i]] = 1;
    }
  }

  let firstKeys = Object.keys(first);
  let doublesKeys = Object.keys(doubles);

  for (let i = 0; i < doublesKeys.length; i++) {
    delete first[doublesKeys[i]];
  }

  return parseInt(Object.keys(first)[0]);
};

// Tests
console.log(singleNumber([0, 0, 1])); // Should print 1
console.log(singleNumber([3, 4, 2, 4, 1, 3, 1])); // Should print 2
console.log(singleNumber([7, 8, 8, 9, 9])); // Should print 7
console.log(singleNumber([100, 101, 107, 108, 101, 107, 100])); // Should print 108
console.log(singleNumber([24, 25, 26, 24, 25, 27, 28, 27, 28])); // Should print 26
console.log(singleNumber([42])); // Should print 42
