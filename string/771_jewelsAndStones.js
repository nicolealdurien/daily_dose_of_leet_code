/* 771. Jewels and Stones
 * Difficulty - Easy
 *
 * You're given strings 'jewels' representing the types of stones
 * that are jewels, and 'stones' representing the stones you have.
 * Each character in stones is a type of stone you have.
 * You want to know how many of the stones you have are also jewels.
 *
 * Letters are case sensitive,
 * so "a" is considered a different type of stone from "A".
 *
 * Example:
 *
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 *
 * Constraints:
 *
 * 1 <= jewels.length, stones.length <= 50
 * jewels and stones consist of only English letters.
 * All the characters of jewels are unique.
 */

let numJewelsInStones = (jewels, stones) => {
  let count = 0;
  let jewelSet = {};
  for (let i = 0; i < jewels.length; i++) {
    if (jewels[i] in jewelSet) {
      jewelSet[jewels[i]] += 1;
    } else {
      jewelSet[jewels[i]] = 1;
    }
  }
  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.hasOwnProperty(stones[i])) {
      count += 1;
    }
  }
  return count;
};

// Tests
console.log(numJewelsInStones('aA', 'aAAbbbb')); // Should print 3
console.log(numJewelsInStones('x', 'Xp')); // Should print 0
console.log(numJewelsInStones('lmno', 'jJkKlLmM')); // Should print 2
console.log(numJewelsInStones('a', 'b')); // Should print 0
