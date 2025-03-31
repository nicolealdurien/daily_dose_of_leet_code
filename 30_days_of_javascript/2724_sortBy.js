/* 2724. Sort By
 * Difficulty: Easy
 *
 * Given an array (arr) and a function (fn), return a sorted array (sortedArr). 
 * You can assume (fn) only returns numbers,
 * and those numbers determine the sort order of (sortedArr). 
 * (sortedArr) must be sorted in ascending order by (fn) output.
 * 
 * You may assume that (fn) will never duplicate numbers for a given array.
 * 
 * Constraints:
 * 
 *  arr is a valid JSON array
 * fn is a function that returns a number
 * 1 <= arr.length <= 5 * 105
 */ 

const sortBy = (arr, fn) => {
    let orderStorage = {}
    let sortedArr = []

    for (let i = 0; i < arr.length; i++) {
       orderStorage[i] = fn(arr[i])
    };

    const sortedPairs = Object.entries(orderStorage).sort(([, b], [, d]) => b - d)

    sortedPairs.forEach((pair) => {
        sortedArr.push(arr[pair[0]])
    });
    
    return sortedArr;

};

// Tests
const arr1 = [8, 0, 3, 1, 1, 5, 13, 2, 21]
const fn1 = (x) => x

const arr2 = [{"number": 7}, {"number": -5}, {"number": 42}, {"number": 0}]
const fn2 = (x) => x.number

const arr3 = [[3, 1, 4], [8, 0, 8], [6, 3, 6], [4, 7, 0]]
const fn3 = (x) => x[2]

console.log(sortBy(arr1, fn1)) // Should print [0, 1, 1, 2, 3, 5, 8, 13, 21]
console.log(sortBy(arr2, fn2)) // Should print [{"number": -5}, {"number": 0}, {"number": 7}, {"number": 42}]
console.log(sortBy(arr3, fn3)) // Should print [[4, 7, 0], [3, 1, 4], [6, 3, 6], [8, 0, 8]]
