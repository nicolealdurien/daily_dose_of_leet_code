/**
 * 12. Integer to Roman
 * Difficulty - Medium
 * Seven different symbols represent Roman numerals with the following values:
 * Symbol	Value
 * I	1
 * V	5
 * X	10
 * L	50
 * C	100
 * D	500
 * M	1000
 *
 * Roman numerals are formed by appending the conversions of decimal place values from highest to lowest.
 * Converting a decimal place value into a Roman numeral has the following rules:
 *
 * 1) If the value does not start with 4 or 9,
 * select the symbol of the maximal value that can be subtracted from the input,
 * append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
 *
 * 2) If the value starts with 4 or 9,
 * use the subtractive form representing one symbol subtracted from the following symbol.
 * For example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX.
 * Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
 *
 * 3) Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times
 * to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times.
 * If you need to append a symbol 4 times, use the subtractive form.
 *
 * Given an integer, convert it to a Roman numeral.
 *
 * Constraints:  1 <= num <= 3999
 */

let intToRoman = (num) => {
  const conversion = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  const n = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let roman = '';

  while (num > 0) {
    for (let i = 0; i < n.length; i++) {
      while (num - n[i] >= 0) {
        roman += conversion[n[i]];
        num -= n[i];
        if (num === 0) break;
      }
    }
  }

  return roman;
};

// Tests

console.log(intToRoman(3)); // Should print 'III'
console.log(intToRoman(4)); // Should print 'IV'
console.log(intToRoman(2000)); // Should print 'MM'
console.log(intToRoman(1776)); // Should print 'MDCCLXXVI'
console.log(intToRoman(1999)); // Should print 'MCMXCIX'
