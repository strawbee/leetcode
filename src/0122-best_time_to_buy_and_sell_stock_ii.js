/**
 * Best Time to Buy and Sell Stock II
 * @url https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @difficulty easy
 *
 * @input array of numbers
 * @output number
 *
 * The input array represents the price of a given stock on the index i-th day.
 * Design an algorithm to find the max profit. You may complete as many
 * transactions as you want, as long as you sell before you buy again.
 */

function maxProfit(prices) {
  let max_profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max_profit += prices[i] - prices[i - 1];
    }
  }

  return max_profit;
}

/**
 * @comments
 * Since we can sell and buy as many times as we want, we should always sell at
 * every peak, and buy at every dip. Since all we care about is the max profit,
 * we can incrementally add to the max_profit every increasing increment.
 *
 * Alternative to the if statement:
 * max_profit = Math.max(max_profit, max_profit + prices[i] - prices[i - 1]);
 *
 * @time_complexity O(n). We traverse the entire prices array once.
 * @space_complexity O(1). We take up only constant extra space that does not
 * increase depending on the size of the input.
 */
