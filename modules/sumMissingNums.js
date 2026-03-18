/* 
PROBLEM: Create a function that returns the sum of missing numbers. The minimum and maximum value of the given array are the inclusive bounds of the numeric range to consider when searching for missing numbers.
example: [1, 3, 5, 7, 10] -> 29
*/

function sumMissingNumbers(nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const numSet = new Set(nums);

  return Array.from({ length: max - min + 1 }, (_, i) => min + i)
    .filter((n) => !numSet.has(n))
    .reduce((sum, n) => sum + n, 0);
}

const runSumMissingNumbers = () => {
  console.log(sumMissingNumbers([1, 3, 5, 7, 10]));
  console.log(sumMissingNumbers([10, 7, 5, 3, 1]));
  console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]));
};
export { runSumMissingNumbers };
