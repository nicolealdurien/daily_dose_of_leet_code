/* 
 * 2626. Array Reduce Transformation
 *
 * Given an integer array (nums), a reducer function (fn), and an initial value (init), return the final
 * result obtained by executing the fn function on each element of the array, sequentially, passing in the
 * return value from the calculation on the preceding element.
 * 
 * This result is achieved through the following operations: 
 * val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...
 * until every element in the array has been processed. The ultimate value of val is then returned.
 * 
 * If the length of the array is 0, the function should return init.
 * 
 * Please solve it without using the built-in Array.reduce method.
 */

let reduce = (nums, fn, init) => {
    if (nums.length === 0) return init;

    let cumulativeVal = init;

    for (let i = 0; i < nums.length; i++) {
        cumulativeVal = fn(cumulativeVal, nums[i]);
    };
    
    return cumulativeVal;
};

// Tests
nums1 = []
nums2 = [1]
nums3 = [3, 1, 4]
fn1 = (accumulator, current) => { return 27 }
fn2 = (accumulator, current) => { return accumulator * current }
init1 = 42

console.log(reduce(nums1, fn1, init1)) // Should print 42
console.log(reduce(nums2, fn1, init1)) // Should print 27
console.log(reduce(nums3, fn2, init1)) // Should print 504