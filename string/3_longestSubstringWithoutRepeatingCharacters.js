/* 3. Longest Substring Without Repeating Characters
 * Difficulty - Medium
 *
 * Given a string s,
 * find the length of the longest substring without duplicate characters.
 *
 * Example:
 * Input: s = "dvdf"
 * Output: 3
 * Explanation: The answer is "vdf", with the length of 3.
 *
 * Constraints:
 * 0 <= s.length <= 5 * 104
 * s consists of English letters, digits, symbols and spaces.
 */

let lengthOfLongestSubstring = (s) => {
  if (s.length === 0 || s.length === 1) {
    return s.length;
  }

  let longest = [];
  let currentLongest = [];

  for (let i = 0; i < s.length; i++) {
    if (currentLongest.includes(s[i])) {
      if (currentLongest.length > longest.length) {
        longest = currentLongest;
      }
      let idx = currentLongest.indexOf(s[i]) + 1;
      currentLongest = currentLongest.slice(idx); // chop at first appearance of character
      currentLongest.push(s[i]);
    } else {
      currentLongest.push(s[i]);
    }
  }

  if (currentLongest.length > longest.length) {
    return currentLongest.length;
  }

  return longest.length;
};

// Tests
console.log(lengthOfLongestSubstring('rstlnelzx')); // 6
console.log(lengthOfLongestSubstring('qqqqqqqq')); // 1
console.log(lengthOfLongestSubstring('stlatxstl')); // 5
console.log(lengthOfLongestSubstring('')); // 0
console.log(lengthOfLongestSubstring('z')); // 1
