/* 58. Length of Last Word
 * Difficulty - Easy
 *
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 *
 * A word is a maximal substring consisting of non-space characters only.
 */

const lengthOfLastWord = (s) => {
  let count = 0;
  let wordSeen = false;

  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] !== ' ' && wordSeen === false) {
      wordSeen = true;
    }

    if (wordSeen === true && s[i] === ' ') {
      return count;
    }

    if (s[i] !== ' ') {
      count += 1;
    }
  }

  return count; // returns for string with no spaces
};

// Tests
console.log(lengthOfLastWord('aaaaaaaaa')); // Should print 9
console.log(lengthOfLastWord('  on a  dark desert  highway   ')); // Should print 7
console.log(lengthOfLastWord('cool wind in my hair')); // Should print 4
console.log(lengthOfLastWord(' Scaramouche ')); // Should print 11
