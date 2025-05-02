/* 125. Valid Palindrome
 * Difficulty - Easy
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, 
 * it reads the same forward and backward. 
 * Alphanumeric characters include letters and numbers.
 * 
 * Given a string, return true if it is a palindrome, or false otherwise.
*/


let isPalindrome = (string) => {
    let stripped = string.toLowerCase().replace(/[^0-9a-zA-Z]/g, '')
    let flipped = stripped.split("").reverse().join("")
    return stripped === flipped
};

// Tests
console.log(isPalindrome("raceCar")) // Should print true
console.log(isPalindrome("helloWorld")) // Should print false
console.log(isPalindrome("nurses run")) // Should print true
