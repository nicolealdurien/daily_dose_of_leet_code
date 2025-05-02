/* 20. Valid Parentheses
 * Difficulty - Easy
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 */

let isValid = (s) => {
  if (s.length < 2) return false;

  let stack = [];
  let pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
      stack.push(s[i]);
    } else if (pairs[s[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

// Tests

console.log(isValid('')); // Should print false
console.log(isValid('[(')); // Should print false
console.log(isValid('()[]')); // Should print true
console.log(isValid('()[]{}()[[](){}')); // Should print false
console.log(isValid('[]')); // Should print true
