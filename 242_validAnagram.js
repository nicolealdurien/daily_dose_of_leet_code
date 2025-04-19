/* 242. Valid Anagram
 * Difficult - Easy
 *
 * Given two strings s and t,
 * return true if t is an anagram of s,
 * and false otherwise.
 */

let isAnagram = (s, t) => {
  let tracking = {};
  for (let i = 0; i < s.length; i++) {
    if (tracking[s[i]]) {
      tracking[s[i]] += 1;
    } else {
      tracking[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!tracking[t[i]] || tracking[t[i]] <= 0) {
      return false;
    } else {
      tracking[t[i]] -= 1;
      if (tracking[t[i]] === 0) {
        delete tracking[t[i]];
      }
    }
  }

  return Object.keys(tracking).length === 0;
};

// Tests
console.log(isAnagram('listen', 'silent')); // Should print true
console.log(isAnagram('spices', 'epics')); // Should print false
console.log(isAnagram('pairs', 'paris')); // Should print true
console.log(isAnagram('neural', 'funerals')); // Should print false
