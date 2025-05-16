/* 1431. Kids With the Greatest Number of Candies
 * Difficulty - Easy
 *
 * There are n kids with candies.
 * You are given an integer array candies,
 * where each candies[i] represents the number of candies the ith kid has,
 * and an integer extraCandies,
 * denoting the number of extra candies that you have.
 *
 * Return a boolean array result of length n, where result[i] is true if,
 * after giving the ith kid all the extraCandies,
 * they will have the greatest number of candies among all the kids,
 * or false otherwise.
 *
 * Note that multiple kids can have the greatest number of candies.
 *
 * Example 1:
 * Input: candies = [2,3,5,1,3], extraCandies = 3
 * Output: [true,true,true,false,true]
 *
 * Constraints:
 *
 * n == candies.length
 * 2 <= n <= 100
 * 1 <= candies[i] <= 100
 * 1 <= extraCandies <= 50
 */

let kidsWithCandies = (candies, extraCandies) => {
  let max = 0;
  let boolArray = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      boolArray.push(true);
    } else {
      boolArray.push(false);
    }
  }

  return boolArray;
};

// Tests
console.log(kidsWithCandies([1, 1], 1)); // Should print [true, true]
console.log(kidsWithCandies([1, 5, 3, 2], 3)); // Should print [false, true, true, true]
console.log(kidsWithCandies([6, 9, 7, 8], 1)); // Should print [false, true, false, true]
