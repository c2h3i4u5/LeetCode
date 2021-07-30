/** not finish
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  let max = 0;
  let next_date = 0;
  for (let i = 0; i < prices.length; i++) {
    maxPrice = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxPrice) {
        maxPrice = prices[j] - prices[i];
        next_date = i;
      }
    }
    i = next_date;
    max = max + maxPrice;
  }
  console.log(max);
};

maxProfit([1, 2, 3, 4, 5]);
