/*80. Remove Duplicates from Sorted Array II
 * Difficulty - Medium
 *
 * Given an integer array nums sorted in non-decreasing order,
 * remove some duplicates in-place such that each unique element appears
 * at most twice.
 * The relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some
 * languages, you must instead have the result be placed in the first part of the array nums.
 * More formally, if there are k elements after removing the duplicates,
 * then the first k elements of nums should hold the final result.
 * It does not matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 *
 * Do not allocate extra space for another array. You must do this
 * by modifying the input array in-place with O(1) extra memory.
 */

const removeDuplicates = (nums) => {
  let seen = {};
  for (let i = nums.length - 1; i > -1; i--) {
    if (!(nums[i] in seen)) {
      seen[nums[i]] = 1;
    } else if (nums[i] in seen && seen[nums[i]] == 2) {
      nums.splice(i, 1);
    } else {
      seen[nums[i]] += 1;
    }
  }

  return nums.length;
};

// Tests

let nums1 = [8, 8, 9];
let nums2 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];
let nums3 = [6, 7, 8, 9];
let nums4 = [5, 5, 5, 5, 5, 5];

console.log(removeDuplicates(nums1)); // Should print 3
console.log(removeDuplicates(nums2)); // Should print 9
console.log(removeDuplicates(nums3)); // Should print 4
console.log(removeDuplicates(nums4)); // Should print 2
