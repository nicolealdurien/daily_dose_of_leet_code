/* 35. Search Insert Position
 * Difficulty - Easy
 *
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

let searchInsert = (nums, target) => {
  if (target < nums[0]) return 0; // if target is smaller than start of existing array

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (i === nums.length - 1 && nums[i] < target) {
      // if target is larger than end of existing array
      return nums.length;
    } else if (nums[i] < target && nums[i + 1] > target) {
      // if target is not present but should be inserted in existing arry
      return i + 1;
    }
  }
};

// Tests
console.log(searchInsert([2, 4, 5, 6], 3)); // Should print 1
console.log(searchInsert([2, 4, 5, 6], 1)); // Should print 0
console.log(searchInsert([2, 4, 5, 6], 7)); // Should print 4
