/*
PROBLEM: You will be given a collection of five cards (representing a player's hand in poker). If your hand contains at least one pair, return an array of two elements: true and the card number of the highest pair (trivial if there only exists a single pair). Else, return false.
- Hands with three or more of the same card still count as containing a pair 
example: ["A", "A", "Q", "Q", "6" ] -> [true, "A"]
         ["3", "5", "5", "5", "5"] -> [true, "5"]
*/

function highestPair(cards) {
  if (!Array.isArray(cards))
    throw new Error("only arrays can be passed to the function");

  const seen = new Set();

  for (const card of cards) {
    if (seen.has(card)) return [true, card];

    seen.add(card);
  }

  return false;
}

const runHighestPair = () => {
  console.log(highestPair(["A", "A", "Q", "Q", "6"]));
  console.log(highestPair(["J", "6", "3", "10", "8"]));
  console.log(highestPair(["K", "7", "3", "9", "3"]));
  console.log(highestPair(["K", "9", "10", "J", "Q"]));
  console.log(highestPair(["3", "5", "5", "5", "5"]));
  console.log(highestPair([]));
  console.log(highestPair(123));
};

export { runHighestPair };
