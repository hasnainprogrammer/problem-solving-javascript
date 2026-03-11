/*
PROBLEM: A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
example: 
- [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2] -> 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
- Be aware that boomerangs can overlap, like so: [1, 7, 1, 7, 1, 7, 1] -> 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
*/

function countBoomerangs(arr) {
  if (!Array.isArray(arr))
    throw new Error("only array can be passed to the function");

  // loop through the array and check element at i with the element at i + 2
  const boomerangs = [];
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const nextElement = arr[i + 1];
    const secondNextElement = arr[i + 2];
    // if both elements at i and i + 2 are same then store the subarray from i to i + 2 as it is a boomerang
    if (
      currentElement === secondNextElement &&
      currentElement !== nextElement
    ) {
      boomerangs.push([currentElement, nextElement, secondNextElement]);
    }
  }
  // return the stored boomerangs
  return boomerangs;
}

const runBoomerangs = () => {
  console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
  console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));
  console.log(countBoomerangs(null));
};
export { runBoomerangs };
