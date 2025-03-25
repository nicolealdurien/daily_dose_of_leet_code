/* 2677. Chunk Array
 * Difficulty - Easy
 * 
 * Given an array (arr) and a chunk size (size), return a chunked array.
 * 
 * A chunked array contains the original elements in arr,
 * but consists of subarrays each of length size. 
 * The length of the last subarray may be less than size 
 * if arr.length is not evenly divisible by size.
 * 
 * You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
 * 
 * Please solve it without using lodash's _.chunk function.
 */

let chunk = (arr, size) => {
    let shrinkingArr = arr
    let newChunk = []
    let chunkedArr = []

    if (arr.length === 0) return []

    for (let i = 0; i < arr.length; i++) {
        if (newChunk.length === size) { // check if previous chunk is full
            chunkedArr.push(newChunk)
            newChunk = []
        }

        newChunk.push(arr[i])
    }

    chunkedArr.push(newChunk)  // get final chunk

    return chunkedArr
};

// Tests
let arr1 = [];
let arr2 = [ 8, 6, 7, 5, 3, 0, 9 ]
let arr3 = [ 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7 ]
let size = 3

console.log(chunk(arr1, size)) // Should print []
console.log(chunk(arr2, size)) // Should print [ [8, 6, 7], [5, 3, 0], [9]]
console.log(chunk(arr3, size)) // Should print [ [3, 1, 4], [1, 5, 9], [2, 6, 5], [3, 5, 8], [9, 7]]