/*
PROBLEM: Given an array `numbers` of size n storing n different integers which fall within the range [0, n], implement a function to identify the missing element in the array. All numbers except one are present in the array. Find the missing number.
example: [1,3,0] -> 2, [1] -> 0
*/

/**
 @param {number[]} numbers -  array of integers
 @returns {number} missing number
 */

function findMissingNumber(numbers) {
  const origionalValues = new Set(numbers);
  const n = numbers.length;

  for (let i = 0; i <= n; i++) {
    if (!origionalValues.has(i)) return i;
  }

  return false;
}

const runFindMissingNumber = () => {
  console.log(findMissingNumber([1, 3, 0]));
  console.log(findMissingNumber([1]));
  console.log(findMissingNumber([3, 0, 4, 2, 1]));
};
export { runFindMissingNumber };
