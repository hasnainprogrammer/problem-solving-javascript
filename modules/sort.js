/*
PROBLEM: Create a function that, given an array similar to the above, sorts the array according to the "content of the elements". In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements"
example: [[3], 4, [2], [5], 1, 6] -> [1, [2], [3], 4, [5], 6]
*/

function sortIt(arr) {
  return arr.sort(
    (a, b) => (Array.isArray(a) ? a[0] : a) - (Array.isArray(b) ? b[0] : b),
  );
}

const runSortIt = () => {
  console.log(sortIt([4, 1, 3]));
  console.log(sortIt([[4], [1], [3]]));
  console.log(sortIt([4, [1], 3]));
  console.log(sortIt([[4], 1, [3]]));
  console.log(sortIt([[3], 4, [2], [5], 1, 6]));
};

export { runSortIt };
