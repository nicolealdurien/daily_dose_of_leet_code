/* 169. Majority Element
 * Difficulty - Easy
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * Constraints:
 *
 * n == nums.length
 * 1 <= n <= 5 * 104
 * -109 <= nums[i] <= 109
 */

let majorityElement = (nums) => {
  let hash = {};

  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      if (hash[nums[i]] + 1 > nums.length / 2) {
        return nums[i];
      }
      hash[nums[i]] += 1;
    } else {
      hash[nums[i]] = 1;
    }
  }
};

// Tests
console.log(majorityElement([3, 8, 3])); // Should print 3
console.log(majorityElement([5, 5, 1, 1, 1, 1, 7])); // Should print 1
console.log(majorityElement([9])); // Should print 9
