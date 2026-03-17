/*
PROBLEM: Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).
- The frequency of the majority element must be strictly greater than N/2.
- If there is no majority element, return null.
- If the array is empty, return null.
example: ["A", "A", "B"] -> A, ["A", "B", "B", "A", "C", "C"] -> null
*/

function majorityVote(votes) {
  if (!votes.length) return null;

  // create a hasmap which will store the frequency of each element
  const votesCount = {};
  const threshold = votes.length / 2;

  for (const vote of votes) {
    if (vote in votesCount) {
      votesCount[vote] += 1;
    } else {
      votesCount[vote] = 1;
    }
  }

  // find element with frequency > N / 2
  const majorityVote = Object.entries(votesCount).find(
    (vote) => vote[1] > threshold,
  );

  // return that element if found else return null
  return majorityVote ? majorityVote[0] : null;
}

const runmajorityVote = () => {
  console.log(majorityVote(["A", "A", "B"]));
  console.log(majorityVote(["A", "A", "A", "B", "C", "A"]));
  console.log(majorityVote(["A", "B", "B", "A", "C", "C"]));
  console.log(majorityVote([]));
};
export { runmajorityVote };
