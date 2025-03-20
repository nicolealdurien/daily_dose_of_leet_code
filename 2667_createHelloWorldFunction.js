// 2667. Create Hello World Function
// Write a function createHelloWorld. 
// It should return a new function that always returns "Hello World".

let createHelloWorld = () => {
    
    return (...args) => {
        return "Hello World";
    };
};

//Tests
let result1 = createHelloWorld(5)
let result2 = createHelloWorld("Hello World");
let result3 = createHelloWorld();
let result4 = createHelloWorld(null);
let result5 = createHelloWorld({}, [], 8675309, "Test, 1, 2, 3")

console.log(result1());
console.log(result2());
console.log(result3());
console.log(result4());
console.log(result5());