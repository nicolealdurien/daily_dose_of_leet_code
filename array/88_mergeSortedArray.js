/* 88. Merge Sorted Array
 * Difficulty - Easy
 *
 * You are given two integer arrays nums1 and nums2,
 * sorted in non-decreasing order, and two integers m and n,
 * representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function,
 * but instead be stored inside the array nums1.
 * To accommodate this, nums1 has a length of m + n,
 * where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

// Not optimized - will circle back for that later

let merge = (nums1, m, nums2, n) => {
  let tracker = m;
  for (let i = 0; i < nums2.length; i++) {
    nums1[tracker] = nums2[i];
    tracker += 1;
  }
  nums1.sort((a, b) => a - b);
};

// Tests
let nums1 = [7, 8, 9, 0, 0, 0];
let nums2 = [4, 5, 6, 7, 8];
let m = 3;
let n = 5;
merge(nums1, m, nums2, n);
console.log(nums1); // Should print [4, 5, 6, 7, 7, 8, 8, 9]

let nums3 = [0, 0];
let nums4 = [2, 3];
let m2 = 0;
let n2 = 2;
merge(nums3, m2, nums4, n2);
console.log(nums3); // Should print [2, 3]
