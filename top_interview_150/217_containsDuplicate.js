/* 217. Contains Duplicate
 * Difficulty - Easy
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

let containsDuplicate = (nums) => {
  if (nums.length === 1) return false;

  let seen = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in seen) return true;
    seen[nums[i]] = 1;
  }

  return false;
};

// Tests

console.log(containsDuplicate([])); // Should print false
console.log(containsDuplicate([27])); // Should print false
console.log(containsDuplicate([0, 1, 1, 2, 3, 5, 8])); // Should print true
console.log(containsDuplicate([8, 0, 8])); // Should print true
console.log(containsDuplicate([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])); // Should print true
console.log(containsDuplicate([3, 1, 4, 7, 2, 5, 6, 8])); // Should print false
