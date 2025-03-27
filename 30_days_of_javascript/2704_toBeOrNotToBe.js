/* 
 * 2704. To Be Or Not To Be
 * Write a function "expect" that helps developers test their code. It should take in any value (val) and 
 * return an object with the following two functions.
 * 
 * toBe(val) accepts another value and returns true if the two values === each other. 
 * If they are not equal, it should throw an error "Not Equal".
 * notToBe(val) accepts another value and returns true if the two values !== each other. 
 * If they are equal, it should throw an error "Equal".
 */

let expect = (val) => {
    return {
        toBe: (val2) => {
            if (val === val2) {
                return true
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe: (val2) => {
                if (val !== val2) {
                return true
            } else {
                throw new Error("Equal")
            }
        }
    }
};

// Solution beats the runtime of 95.93% of LC submissions.

// Tests
let testCode = (expectCall) => {
    try {
        let result = expectCall();
        if (result === true) return { "value": true };
    } catch (err) {
        return { "error": err.message }
    }
}

let expect1 = () => expect(7).toBe(7);
let expect2 = () => expect(2).toBe(null);
let expect3 = () => expect(9).notToBe(11);
let expect4 = () => expect(9).notToBe(9);
let expect5 = () => expect("Bonjour").toBe("Bonjour");
let expect6 = () => expect("Bonjour").toBe("Hello");

console.log(testCode(expect1)) // Should print { "value": true }
console.log(testCode(expect2)) // Should print { "error": "Not Equal" }
console.log(testCode(expect3)) // Should print { "value": true }
console.log(testCode(expect4)) // Should print { "error": "Equal" }
console.log(testCode(expect5)) // Should print { "value": true }
console.log(testCode(expect6)) // Should print { "error": "Not Equal" }