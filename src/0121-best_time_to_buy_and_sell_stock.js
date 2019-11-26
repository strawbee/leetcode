/**
 * Best Time to Buy and Sell Stock
 * @url https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @difficulty easy
 *
 * @input array of numbers
 * @output number
 *
 * The input array represents the price of a given stock on the index i-th day.
 * Design an algorithm to find the max profit. You may only buy and sell once.
 */

function maxProfit(prices) {
  let max_profit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    else max_profit = Math.max(prices[i] - min, max_profit);
  }

  return max_profit;
}

/**
 * @comments
 * Dynamic Programming
 * As we iterate through prices, we find the max profit up to the ith element.
 * The max profit is either the current max profit up to that point, or the
 * difference between the minimum element and the current element.
 *
 * @time_complexity O(n). We traverse the entire prices array once.
 * @space_complexity O(1). We take up only constant extra space that does not
 * increase depending on the size of the input.
 */