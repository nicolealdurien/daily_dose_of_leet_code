// 2620. Counter
// Write a function createHelloWorld. 
// Given an integer n, return a counter function. 
// This counter function initially returns n and then 
// returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

let createCounter = (n) => {
    let count = 0;

    return () => {
        let value = n + count;
        count += 1;

        return value;
    };
};

//Tests
let counter = createCounter(10);  // n = 10
let result1 = ["call", "call", "call"].map(() => counter());
console.log(result1); // Should print [10, 11, 12]

let counter2 = createCounter(-1);  // n = -1
let result2 = ["call", "call", "call", "call"].map(() => counter2());
console.log(result2); // Should print [-1, 0, 1, 2]

let counter3 = createCounter(990);  // n = 990
let result3 = ["call", "call", "call", "call", "call"].map(() => counter3());
console.log(result3); // Should print [990, 991, 992, 993, 994"]