/* 383. Ransom Note
 * Difficulty - Easy
 *
 * Given two strings ransomNote and magazine,
 * return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 */

let canConstruct = (ransomNote, magazine) => {
  let note_ct = 0;
  let seen = {};

  for (let i = 0; i < magazine.length; i++) {
    if (seen.hasOwnProperty(magazine[i])) {
      seen[[magazine[i]]] += 1;
    } else seen[magazine[i]] = 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!seen.hasOwnProperty(ransomNote[i])) {
      return false;
    } else if (
      seen.hasOwnProperty(ransomNote[i]) &&
      seen[ransomNote[i]] === 0
    ) {
      return false;
    } else {
      note_ct++;
      seen[ransomNote[i]] -= 1;
    }
  }

  return note_ct === ransomNote.length;
};

// Tests

console.log(canConstruct('abc', 'abxy')); // Should print false
console.log(canConstruct('abc', 'aqbxycd')); // Should print true
console.log(canConstruct('aabc', 'aqbxycd')); // Should print false
