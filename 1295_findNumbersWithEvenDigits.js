/* 1295. Find Numbers with Even Number of Digits
 * Difficulty - Easy
 *
 * Given an array nums of integers, return how many of them contain an even number of digits.
 */

let findNumbers = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let digitNumber = nums[i].toString().split('').length;
    if (digitNumber % 2 === 0) {
      count += 1;
    }
  }

  return count;
};

// Tests
console.log(findNumbers([27, 808, 7, 2, 1998])); // Should print 2
console.log(findNumbers([5, 6, 7, 8])); // Should print 0
console.log(findNumbers([100, 101, 102, 103])); // Should print 0
console.log(findNumbers([1, 10, 100, 1000, 10000, 100000])); // Should print 3
