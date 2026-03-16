/*
PROBLEM: Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. For example, there are 7 socks with colors [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
Create a function that returns an integer representing the number of matching pairs of socks that are available.
example: [10, 20, 20, 10, 10, 30, 50, 10, 20] -> 3
*/

function sockMerchant(sockColors) {
  if (!Array.isArray(sockColors))
    throw new Error("only array can be passed to the function");

  // determine how many pairs of socks with matching colors there are
  let numberOfMatchingSocks = 0;
  const trackPairs = new Set();

  for (const sockColor of sockColors) {
    if (trackPairs.has(sockColor)) {
      numberOfMatchingSocks += 1;
      trackPairs.delete(sockColor);
    } else {
      trackPairs.add(sockColor);
    }
  }

  // return an integer representing the number of matching pairs of socks that are available
  return numberOfMatchingSocks;
}

const runSockMerchant = () => {
  console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]));
  console.log(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]));
  console.log(sockMerchant([]));
  console.log(sockMerchant({}));
};
export { runSockMerchant };
