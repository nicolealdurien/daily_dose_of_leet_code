/* 27. Remove Element
 * Difficulty - Easy
 * Given an integer array nums and an integer val,
 * remove all occurrences of val in nums in-place.
 * The order of the elements may be changed.
 * Then return the number of elements in nums which are not equal to val.
 *
 * Consider the number of elements in nums which are not equal to val be k,
 * to get accepted, you need to do the following things:
 *
 * Change the array nums such that the first k elements of nums
 * contain the elements which are not equal to val.
 * The remaining elements of nums are not important as well as the size of nums.
 *
 * Return k.
 */

let removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = '_';
    }
  }

  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === '_') {
      return i;
    }
  }

  return nums.length; // if no elements are equal to val
};

// Tests
console.log(removeElement([3, 2, 2, 3], 3)); // Should print 2
console.log(removeElement([0, 1, 2, 2, 3, 7, 0, 4, 2], 2)); // Should print 6
console.log(removeElement([1, 2, 3, 4, 5], 6)); // Should print 5
