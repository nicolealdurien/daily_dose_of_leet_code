/* 1. Two Sum
 * Difficulty: Easy
 * 
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 */

let twoSum = (nums, target) => {
    let seen = {}

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in seen) {
            return [seen[target - nums[i]], i]
        }
        else seen[nums[i]] = i
    }

};

// Tests
let nums1 = [3, 1, 4, 7, 2, 5, 6, 8]
let target1 = 15
let nums2 = [27, 27]
let target2 = 54
let nums3 = [0, 2, 7, 11, 14]
let target3 = 11

console.log(twoSum(nums1, target1)); // Should print [3, 7]
console.log(twoSum(nums2, target2)); // Should print [0, 1]
console.log(twoSum(nums3, target3)); // Should print [0, 3]