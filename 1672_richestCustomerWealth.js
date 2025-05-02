/* 1672. Richest Customer Wealth
 * Difficulty - Easy
 *
 * You are given an m x n integer grid accounts where accounts[i][j]
 * is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
 * Return the wealth that the richest customer has.
 *
 * A customer's wealth is the amount of money they have in all their bank accounts.
 * The richest customer is the customer that has the maximum wealth.
 */

let maximumWealth = (accounts) => {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let customerWealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      customerWealth += accounts[i][j];
    }
    if (customerWealth > maxWealth) {
      maxWealth = customerWealth;
    }
  }

  return maxWealth;
};

console.log(maximumWealth([[1]])); // Should print 1
console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
    [4, 5, 6],
  ]),
); // Should print 15
console.log(
  maximumWealth([
    [1, 2],
    [8, 9],
    [5, 6],
    [3, 2],
  ]),
); // Should print 17
