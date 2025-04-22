/* 121. Best Time to Buy and Sell Stock
 * Difficulty - Easy
 *
 * You are given an array called prices, where prices[i] is the price of a given stock on the ith * day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and
 * choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 */

let maxProfit = (prices) => {
  let maxProfit = 0;
  let currentProfit = 0;
  let leftPrice = prices[0];
  let rightPrice = prices[1];

  for (let i = 1; i < prices.length; i++) {
    currentProfit = rightPrice - leftPrice;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
    if (i === prices.length - 1) break;
    if (rightPrice < leftPrice) {
      leftPrice = rightPrice;
    }
    rightPrice = prices[i + 1];
  }

  return maxProfit;
  ``;
};

// Tests
console.log(maxProfit([5, 4, 3, 2, 1])); // Should return 0
console.log(maxProfit([8, 3, 2, 7, 6, 5, 1])); // Should return 5
