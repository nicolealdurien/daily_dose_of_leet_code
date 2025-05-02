/* 28. Find the Index of the First Occurrence in a String
 * Difficulty - Easy
 * Given two strings needle and haystack,
 * return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 *
 * Example 1:
 *
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 *
 * Example 2:
 *
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */

let strStr = (haystack, needle) => {
  let stack = '';
  let stackIndex = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (stack.length < needle.length) {
      stack += haystack[i];
    } else if (stack === needle) {
      return stackIndex;
    } else {
      stack = stack.substr(1) + haystack[i];
      stackIndex++;
    }
  }

  if (stack === needle) {
    // in case needle found on last iteration
    return stackIndex;
  }

  return -1;
};

// Tests

let haystack1 = 'bonjour';
let needle1 = 'bon';
let haystack2 = 'illinois';
let needle2 = 'nois';
let haystack3 = 'missouri';
let needle3 = 'mo';
let haystack4 = 'x';
let needle4 = 'x';
let haystack5 = '';
let needle5 = '';

console.log(strStr(haystack1, needle1)); // Should print 0
console.log(strStr(haystack2, needle2)); // Should print 4
console.log(strStr(haystack3, needle3)); // Should print -1
console.log(strStr(haystack4, needle4)); // Should print 0
console.log(strStr(haystack5, needle5)); // Should print 0
