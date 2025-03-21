/* 
 * 2634. FilterElements From Array
 *
 * Given an integer array arr and a filtering function (fn), return a filtered array (filteredArr).
 * 
 * The fn function takes one or two arguments:
 * 
 * arr[i]: number from the arr
 * i: index of arr[i]
 * 
 * filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates
 * to a truthy value. A truthy value is a value where Boolean(value) returns true.
 * 
 * Please solve it without the built-in Array.filter method.
 */

let filter = (arr, fn) => {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArray.push(arr[i])
        }
    }
    return filteredArray
};

// Solution beats the runtime of 95.09% of LC submissions.

// Tests
let array = [-10, 0, 5, 25, 100]

let fn1 = (n, i) => n % 2 === 0
let fn2 = (n, i) => n <= 5
let fn3 = (n, i) => n + 10

console.log(filter(array, fn1)) // should be [-10, 0, 100]
console.log(filter(array, fn2)) // should be [-10, 0, 5]
console.log(filter(array, fn3)) // should be [0, 5, 25, 100] because -10 + 10 is 0 and therefore falsy