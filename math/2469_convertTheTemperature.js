/* 2469. Convert the Temperature
 * Difficulty - Easy
 *
 * You are given a non-negative floating point number rounded
 * to two decimal places celsius, that denotes the temperature in Celsius.
 *
 * You should convert Celsius into Kelvin and Fahrenheit
 * and return it as an array ans = [kelvin, fahrenheit].
 *
 * Return the array ans.
 * Answers within 10-5 of the actual answer will be accepted.
 *
 * Note that:
 *
 * Kelvin = Celsius + 273.15
 * Fahrenheit = Celsius * 1.80 + 32.00
 *
 * Constraints:
 *
 * 0 <= celsius <= 1000
 */

let convertTemperature = (celsius) => {
  let toKelvin = celsius + 273.15;
  let toFahrenheit = celsius * 1.8 + 32.0;

  return [parseFloat(toKelvin), parseFloat(toFahrenheit)];
};

// Tests
console.log(convertTemperature(0)); // Should print [273.15, 32]
console.log(convertTemperature(100)); // Should print [373.15, 212]
console.log(convertTemperature(37)); // Should print [310.15, 98.6]
