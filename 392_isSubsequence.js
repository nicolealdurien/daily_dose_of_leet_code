/* 392. Is Subsequence
 * Difficulty - Easy
 *
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string
 * by deleting some (can be none) of the characters without disturbing the relative positions
 * of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

const isSubsequence = (s, t) => {
  let s_track = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[s_track] === t[i]) {
      s.slice(t[i]);
      s_track += 1;
    }
  }

  if (s_track === s.length) {
    return true;
  }

  return false;
};

// Tests
console.log(isSubsequence('car', 'racecar')); // Should print true
console.log(isSubsequence('car', 'coupe')); // Should print false
console.log(isSubsequence('xyz', 'qxrsytuzvw')); // Should print true
