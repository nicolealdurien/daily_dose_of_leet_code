/* 2703. Return Length of Arguments Passed
 * Write a function argumentsLength that returns the count of arguments passed to it.
 */

let argumentsLength = (...args) => {
    return args.length
};

// Tests
console.log(argumentsLength()) // Should be 0
console.log(argumentsLength(42)) // Should be 1
console.log(argumentsLength([1, 2, 3])) // Should be 1
console.log(argumentsLength(1, 2, 3)) // Should be 3
console.log(argumentsLength("string", 0, true, 2.7)) // Should be 4