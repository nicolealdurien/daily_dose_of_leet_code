/* 3498. Reverse Degree of a String
 * Difficulty - Easy
 *
 * Given a string s, calculate its reverse degree.
 *
 * The reverse degree is calculated as follows:
 *
 * For each character, multiply its position in the reversed alphabet
 * ('a' = 26, 'b' = 25, ..., 'z' = 1) with its position in the string (1-indexed).
 *
 * Sum these products for all characters in the string.
 *
 * Return the reverse degree of s.
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s contains only lowercase English letters.
 */

let reverseDegree = (s) => {
  let revAlphabet = {
    a: 26,
    b: 25,
    c: 24,
    d: 23,
    e: 22,
    f: 21,
    g: 20,
    h: 19,
    i: 18,
    j: 17,
    k: 16,
    l: 15,
    m: 14,
    n: 13,
    o: 12,
    p: 11,
    q: 10,
    r: 9,
    s: 8,
    t: 7,
    u: 6,
    v: 5,
    w: 4,
    x: 3,
    y: 2,
    z: 1,
  };

  let sumTotal = 0;

  for (let i = 0; i < s.length; i++) {
    sumTotal += revAlphabet[s[i]] * (i + 1);
  }

  return sumTotal;
};

// Tests
console.log(reverseDegree('nma')); // Should print 119 (13 + 28 + 78)
console.log(reverseDegree('zyx')); // Should print 14 (1 + 4 + 9)
console.log(reverseDegree('a')); // Should print 26
