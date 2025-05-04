/* 2114. Maximum Number of Words Found in Sentences
 * Difficulty - Easy
 *
 * A sentence is a list of words that are separated by a single space
 * with no leading or trailing spaces.
 *
 * You are given an array of strings 'sentences',
 * where each sentences[i] represents a single sentence.
 *
 * Return the maximum number of words that appear in a single sentence.
 */

let mostWordsFound = (sentences) => {
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i] === '') continue;
    let words = 1;
    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] === ' ') words += 1;
    }
    if (words > max) max = words;
  }
  return max;
};

// Tests
console.log(mostWordsFound(['Hi', 'Bonjour tout le monde'])); // Should print 4
console.log(
  mostWordsFound([
    'I see a little silhouhetto of a man',
    'Scaramouche! Scaramouche!',
  ]),
); // Should print 8
console.log(mostWordsFound([''])); // Should print 0
