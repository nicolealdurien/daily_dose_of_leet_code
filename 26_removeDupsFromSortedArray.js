/* 26. Remove Duplicates from Sorted Array
 * Difficulty - Easy
 *
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k,
 * to get accepted, you need to do the following things:
 *
 * Change the array nums such that the first k elements of nums
 * contain the unique elements in the order they were present in nums initially.
 * The remaining elements of nums are not important as well as the size of nums.
 *
 * Return k.
 */

let removeDuplicates = (nums) => {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};

// Tests
let nums1 = [8, 8, 9];
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let nums3 = [6, 7, 8, 9];
let nums4 = [5, 5, 5, 5, 5, 5];

console.log(removeDuplicates(nums1)); // Should print 2
console.log(removeDuplicates(nums2)); // Should print 5
console.log(removeDuplicates(nums3)); // Should print 4
console.log(removeDuplicates(nums4)); // Should print 1
