/*
PROBLEM: You are given two arrays of integers, arr1 and arr2. Your task is to write a function that returns a new array containing the elements that are present in both arrays.
- The result should include each element from arr1 that also exists in arr2, preserving the order in which they appear in arr1.
example: arr1 = [1, 2, 3], arr2 = [3, 4, 5] -> [3]
*/

function findIntersection(arr1, arr2) {
  const s = new Set(arr2);
  return arr1.filter((n) => s.has(n));
}

const runfindIntersection = () => {
  console.log(findIntersection([1, 2, 3], [3, 4, 5]));
  console.log(findIntersection([1, 2], [1, 2]));
  console.log(findIntersection([1, 2], []));
  console.log(findIntersection([], []));
};
export { runfindIntersection };
