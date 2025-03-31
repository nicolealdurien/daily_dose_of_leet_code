/* 2723. Add Two Promises
 * Difficulty - Easy
 *
 * Given two promises promise1 and promise2, return a new promise. 
 * promise1 and promise2 will both resolve with a number. 
 * The returned promise should resolve with the sum of the two numbers. 
 * 
 * Constraints:
 * promise1 and promise2 are promises that resolve with a number
 */

let addTwoPromises = async (promise1, promise2) => {

    return Promise.all([promise1, promise2])
        .then((values) => values[0] + values[1])

};

// Tests
promise1 = new Promise(resolve => setTimeout(() => resolve(9), 0)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 10))
addTwoPromises(promise1, promise2).then(result => {
    console.log(result); // Should print 14
});
promise3 = new Promise(resolve => setTimeout(() => resolve(-5), 20))
promise4 = new Promise(resolve => setTimeout(() => resolve(15), 30))
addTwoPromises(promise3, promise4).then(result => {
    console.log(result); // Should print 10
});
