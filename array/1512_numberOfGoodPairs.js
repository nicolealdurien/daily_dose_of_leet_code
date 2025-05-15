/* 1512. Number of Good Pairs
 * Difficulty - Easy
 *
 * Given an array of integers nums, return the number of good pairs.
 *
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 */

let numIdenticalPairs = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        count += 1;
      }
    }
  }
  return count;
};

// Tests
console.log(numIdenticalPairs([7, 7, 7])); // Should print 3
console.log(numIdenticalPairs([4, 5, 6, 7])); // Should print 0
console.log(numIdenticalPairs([5, 6, 7, 5, 5, 7])); // Should print 4
console.log(numIdenticalPairs([1])); // Should print 0
