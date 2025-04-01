/* 2695. Array Wrapper
 * Difficulty - Easy
 *
 * Create a class ArrayWrapper that accepts an array of integers in its constructor.
 * This class should have two features:
 * 
 * When two instances of this class are added together with the + operator,
 * the resulting value is the sum of all the elements in both arrays.
 * 
 * When the String() function is called on the instance, 
 * it will return a comma separated string surrounded by brackets. For example, [1,2,3].
 */


let ArrayWrapper = function(nums) { // Remember, no arrow syntax on classes
    this.array = nums.flat()  // valueOf() doesn't work on nested arrays
}

ArrayWrapper.prototype.valueOf = function() {
    return this.array.reduce((runningTotal, current) => runningTotal + current, 0)
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.array.join(',')}]`  
}

// Tests
let nums1 = [[1,2],[3,4]]
let arr1 = new ArrayWrapper(nums1)
console.log(arr1.valueOf()); // Should print 10
console.log(arr1.toString()); // Should print "[1,2,3,4]"

let nums2 = [[], []]
let arr2 = new ArrayWrapper(nums2)
console.log(arr2.valueOf()); // Should print 0
console.log(arr2.toString()); // Should print "[]"