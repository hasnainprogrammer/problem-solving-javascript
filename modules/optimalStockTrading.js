/*
PROBLEM:- Given a list of prices, where each element prices[i] represents the price of a particular stock on day i, determine the maximum profit to be made by purchasing the stock and selling it on a future date. If it is not possible to generate a profit, return 0.
example: [1,2,3,4] -> 3, [4,3,2,1] -> 0, [6,8,1,2,30,19] -> 29
*/

function optimalStockTrading(prices) {
  if (!Array.isArray(prices))
    throw new Error("only arrays can be passed to the function.");

  // determine the maximum profit to be made by purchasing the stock and selling it on a future date.
  let minPrice = prices[0];
  let maxProfit = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }

  // return the profit if so other return 0 if not possible
  return maxProfit;
}

const runOptimalStockTrading = () => {
  console.log(optimalStockTrading([1, 2, 3, 4]));
  console.log(optimalStockTrading([4, 3, 2, 1]));
  console.log(optimalStockTrading([6, 8, 1, 2, 30, 19]));
  console.log(optimalStockTrading([3, 8, 2, 5, 1, 7]));
  console.log(optimalStockTrading("hello"));
};
export { runOptimalStockTrading };
