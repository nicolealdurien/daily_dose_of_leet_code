/* Daily Question for 2025-05-06
 * 1920. Build Array from Permutation
 * Difficulty - Easy
 *
 * Given a zero-based permutation nums (0-indexed),
 * build an array ans of the same length where ans[i] = nums[nums[i]]
 * for each 0 <= i < nums.length and return it.
 *
 * A zero-based permutation nums is an array of distinct integers
 * from 0 to nums.length - 1 (inclusive).
 */

let buildArray = (nums) => {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};

// Tests
console.log(buildArray([0, 6, 2, 1, 5, 3, 4])); // Should print [0, 4, 2, 6, 3, 1, 5]

console.log(buildArray([7, 0, 1, 5, 2, 3, 4, 6])); // Should print [6, 7, 0, 3, 1, 5, 2, 4]
