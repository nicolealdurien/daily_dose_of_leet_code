/* 2666. Allow One Function Call
 *
 * Given a function (fn), return a new function that is identical to the original function 
 * except that it ensures fn is called at most once.

 * The first time the returned function is called, it should return the same result as fn.
 * Every subsequent time it is called, it should return undefined.
 */

let once = (fn) => {
    let called = false;

    return function(...args){
        if (called === true) return undefined;
        
        called = true;
        
        return fn(...args)
        
    };
};

// Test
let timeToTest = () => {
    let fn1 = (a, b, c) => a * b * c;
    let callOnceFn = once(fn1);
    let calls1 = [[2, 3, 4], [7, 8, 9, ]];
    let testResults = [];

    for (let i = 0; i < calls1.length; i++) {
        let args = calls1[i];

        let result = callOnceFn(...args);
        testResults.push({
            calls: i +1,
            value: result
        });
    };
    
    return testResults
}

console.log(timeToTest()) // Should be [ { calls: 1, value: 24 }, { calls: 2, value: undefined } ]
