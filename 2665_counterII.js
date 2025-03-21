/* 
 * 2665. Counter II
 * Write a function createCounter. It should accept an initial integer (init). 
 * It should return an object with three functions.
 * 
 * The three functions are:
 * 
 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
 */

let createCounter = (init) => {
    let value = init;
    return {
        increment: () => {
            value++;
            return value;
        },
        decrement: () => {
            value--
            return value;
        },
        reset: () => {
            value = init;
            return value;
        }
    }
};

// Solution beats the runtime of 95.60% of LC submissions.

//Test
let counter = createCounter(0);  // init = 0
let calls = ["increment", "reset", "increment", "increment", "reset", "decrement"]
let result = []
calls.forEach(call => {
    switch(call){
        case "increment":
            result.push(counter.increment());
            break;
        case "decrement":
            result.push(counter.decrement());
            break;
        case "reset":
        default:
            result.push(counter.reset());
            break;
    }
})

console.log(result); // Should print [1, 0, 1, 2, 0, -1]