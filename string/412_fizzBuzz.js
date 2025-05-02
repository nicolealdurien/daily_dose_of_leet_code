/* 412. Fizz Buzz
 * Difficulty - Easy
 *
 * Given an integer n, return a string array answer (1-indexed) where:
 *
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 */

let fizzBuzz = (n) => {
  let response = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      response.push('FizzBuzz');
    } else if (i % 3 === 0) {
      response.push('Fizz');
    } else if (i % 5 === 0) {
      response.push('Buzz');
    } else {
      response.push(i.toString());
    }
  }
  return response;
};

// Tests
console.log(fizzBuzz(1)); // Should print ["1"]
console.log(fizzBuzz(3)); // Should print ["1", "2", "Fizz"]
console.log(fizzBuzz(5)); // Should print ["1", "2", "Fizz", "4", "Buzz"]
console.log(fizzBuzz(18)); // Should print ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz", "16", "17", "Fizz"]
