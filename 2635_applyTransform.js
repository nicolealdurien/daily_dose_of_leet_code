/* 
 * 2635. Apply Transform Over Each Element in Array
 *
 * Given an integer array arr and a mapping function (fn),
 * return a new array with a transformation applied to each element.
 * 
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * 
 * Please solve it without the built-in Array.map method.
 */

let map = (arr, fn) => {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i))
    }
    
    return newArray
    
};

// Solution beats the runtime of 98.21% of LC submissions.

// Tests
let testArray = [-1, 0, 1, 2, 3, 4]
let fn1 = (n, i) => n * 5
let fn2 = (n, i) => n + 100
let fn3 = (n, i) => n ** 3
let fn4 = (n, i) => 27

console.log(map(testArray, fn1))
console.log(map(testArray, fn2))
console.log(map(testArray, fn3))
console.log(map(testArray, fn4))