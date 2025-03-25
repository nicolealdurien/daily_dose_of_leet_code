
/* 2619. Array Prototype Last
 *
 * Write code that enhances all arrays such that you can call the 
 * array.last() method on any array and it will return the last element. 
 * If there are no elements in the array, it should return -1.
 * 
 * You may assume the array is the output of JSON.parse.
*/

Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : -1;
};

// Tests
let arr1 = [2, 3, 4, 5];
let arr2 = [8675309];
let arr3 = [];

console.log(arr1.last()); // Should be 5
console.log(arr2.last()); // Should be 8675309
console.log(arr3.last()); // Should be -1