/* 2637. Promise Time Limit
 * Difficulty - Medium
 * 
 * Given an asynchronous function fn and a time t in milliseconds, 
 * return a new time limited version of the input function. 
 * fn takes arguments provided to the time limited function.
 * 
 * The time limited function should follow these rules:
 * 
 * If the fn completes within the time limit of t milliseconds, 
 * the time limited function should resolve with the result.
 * 
 * If the execution of the fn exceeds the time limit, 
 * the time limited function should reject with the string "Time Limit Exceeded".
 */

const timeLimit = (fn, t) => {
    
    return async function(...args) {
        return new Promise((res, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t)
            fn(...args).then(res, reject)
        })
    }
};

// Tests

const limited = timeLimit((n) => new Promise((res) => setTimeout(() => res(n), 100)), 50);
limited(100).then(console.log).catch(console.error); // should print Time Limit Exceeded
const limited2 = timeLimit((n) => new Promise((res) => setTimeout(() => res(n/2), 100)), 150);
limited2(100).then(console.log).catch(console.error); // should print 50