/*
PROBLEM: write a function that takes two parameters: nums and a target, and returns an array consists of all the pairs that adds up to the target sum.
example: [2, 7, 11, 15], 9 -> [[2, 7]]
*/

function twoSum(nums, target) {
  const map = new Map();
  const pairs = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      pairs.push([complement, nums[i]]);
    }

    map.set(nums[i], i);
  }

  return pairs;
}

const runtwoSum = () => {
  console.log(twoSum([2, 7, 11, 15], 9));
};

export { runtwoSum };
