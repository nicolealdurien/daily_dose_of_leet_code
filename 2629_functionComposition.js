/* 
 * 2629. Function Composition
 *
 * Given an array of functions [f1, f2, f3, ..., fn], 
 * return a new function fn that is the function composition of the array of functions.
 * 
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * 
 * The function composition of an empty list of functions is the identity function f(x) = x.
 * 
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 */

let compose = (functions) => {
    
    return function(x) {
        let value = x;

        for (let i = functions.length - 1; i > -1; i--) {
            value = functions[i](value);
        };

        return value;
    }
};

// Tests
functions1 = [];
functions2 = [x => x - 3 , x => x ** 2, x => x + 5];
functions3 = [x => 42];
x = 3;

console.log(compose(functions1)(x)); // Should return 3
console.log(compose(functions2)(x)); // Should return 61
console.log(compose(functions3)(x)); // Should return 42