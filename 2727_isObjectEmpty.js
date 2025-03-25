/* 2727. Is Object Empty
 *
 * Given an object or an array, return if it is empty.
 * 
 * An empty object contains no key-value pairs.
 * An empty array contains no elements.
 * 
 * You may assume the object or array is the output of JSON.parse.
 */

let isEmpty = (obj) => {
    
    if (Object.keys(obj).length > 0 || obj.length > 0) return false;
    
    return true;

};


// Tests
test1 = {"length": 0}
test2 = {}
test3 = []
test4 = ["apple", "orange", "banana"]

console.log(isEmpty(test1)) // Should be false
console.log(isEmpty(test2)) // Should be true
console.log(isEmpty(test3)) // Should be true
console.log(isEmpty(test4)) // Should be false