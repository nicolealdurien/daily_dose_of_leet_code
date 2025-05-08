/* 2942. Find Words Containing Character
 * Difficulty - Easy
 *
 * You are given a 0-indexed array of strings 'words' and a character 'x'.
 * Return an array of indices representing the words
 * that contain the character x.
 *
 * Note that the returned array may be in any order.
 *
 *
 * Example 1:
 *
 * Input: words = ["leet","code"], x = "e"
 * Output: [0,1]
 * Explanation: "e" occurs in both words: "leet", and "code".
 * Hence, we return indices 0 and 1.
 *
 * Constraints:
 *
 * 1 <= words.length <= 50
 * 1 <= words[i].length <= 50
 * x is a lowercase English letter.
 * words[i] consists only of lowercase English letters.
 */

let findWordsContaining = (words, x) => {
  let indexArray = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (x === words[i][j]) {
        indexArray.push(i);
        break;
      }
    }
  }
  return indexArray;
};

// Tests
console.log(findWordsContaining(['hello', 'hola', 'bonjour'], 'o')); // Should print [0, 1, 2]
console.log(findWordsContaining(['evermore', 'levee', 'kashmir'], 'i')); // Should print [2]
console.log(findWordsContaining(['bicycle', 'rhapsody', 'champions'], 'x')); // Should print []
console.log(findWordsContaining(['california', 'desperado', 'witchy'], 'c')); // Should print [0, 2]
