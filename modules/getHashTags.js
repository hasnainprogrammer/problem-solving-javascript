/*
PROBLEM: Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.
- If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).
- Punctuation does not count towards a word's length.
example: "How the Avocado Became the Fruit of the Global Trade" -> ["#avocado", "#became", "#global"]
         "Visualizing Science" -> ["#visualizing", "#science"]
*/

const removePunctuation = (str) => str.replace(/[^\w\s]/g, "");

function getHashTags(headline) {
  let words = headline
    .split(" ")
    // Punctuation does not count towards a word's length
    .map((w) => removePunctuation(w))
    .filter(Boolean); // remove empty strings

  // If the title is less than 3 words, just order the words in the title by length in descending order
  if (words.length < 3) {
    return words
      .sort((a, b) => b.length - a.length)
      .map((w) => `#${w.toLowerCase()}`);
  }

  // top 3 longest words of a newspaper headline
  let firstHighest = { word: "", count: -1 };
  let secondHighest = { word: "", count: -1 };
  let thirdHighest = { word: "", count: -1 };

  for (let word of words) {
    const len = word.length;

    if (len > firstHighest.count) {
      thirdHighest = secondHighest;
      secondHighest = firstHighest;
      firstHighest = { word, count: len };
    } else if (len > secondHighest.count) {
      // avoid duplicating firstHighest
      if (word !== firstHighest.word) {
        thirdHighest = secondHighest;
        secondHighest = { word, count: len };
      }
    } else if (len > thirdHighest.count) {
      // avoid duplicates
      if (word !== firstHighest.word && word !== secondHighest.word) {
        thirdHighest = { word, count: len };
      }
    }
  }

  // transforms them into hashtags
  return [firstHighest, secondHighest, thirdHighest].map(
    (pair) => `#${pair.word.toLowerCase()}`,
  );
}

const runGetHashTags = () => {
  console.log(
    getHashTags("How the Avocado Became the Fruit of the Global Trade"),
  );
  console.log(
    getHashTags(
      "Why You Will Probably Pay More for Your Christmas Tree This Year",
    ),
  );
  console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
  console.log(getHashTags("Visualizing Science"));
};

export { runGetHashTags };
