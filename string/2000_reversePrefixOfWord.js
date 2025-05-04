/* 2000. Reverse Prefix of Word
 * Difficulty - Easy
 *
 * Given a 0-indexed string 'word' and a character 'ch',
 * reverse the segment of word that starts at index 0
 * and ends at the index of the first occurrence of ch (inclusive).
 * If the character ch does not exist in word, do nothing.
 *
 * For example, if word = "abcdefd" and ch = "d",
 * then you should reverse the segment that starts at 0 and ends at 3 (inclusive).
 * The resulting string will be "dcbaefd".
 *
 * Return the resulting string.
 */

let reversePrefix = (word, ch) => {
  let prefix = '';
  for (let i = 0; i < word.length; i++) {
    prefix += word[i];
    if (word[i] === ch) {
      prefix = prefix.split('').reverse().join('');
      end = word.slice(i + 1);
      return prefix + end;
    }
  }
  return word;
};

// Tests
console.log(reversePrefix('supercalifragilisticexpialidocious', 'r')); // Should print 'repuscalifragilisticexpialidocious'
console.log(reversePrefix('bobmarley', 'z')); // Should print 'bobmarley'
console.log(reversePrefix('pongo', 'n')); // Should print "nopgo"
