/* 67. Add Binary
 * Difficulty - Easy
 * Given two binary strings a and b, return their sum as a binary string.
 */

let addBinary = (a, b) => {
  let binA = `0b${a}`;
  let binB = `0b${b}`;
  return (BigInt(binA) + BigInt(binB)).toString(2);
};

// Tests
console.log(addBinary('0', '0')); // Should print 0
console.log(addBinary('1', '10')); // Should print 11
console.log(addBinary('10', '10')); // Should print 110
console.log(addBinary('100', '100')); // Should print 1000
console.log(addBinary('1010', '1011')); // Should print 10101
