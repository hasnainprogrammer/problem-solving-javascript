/*
PROBLEM: Given a sentence as str, return true if any two adjacent words have this property: One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u). You can expect sentences in lowercase/uppercase.
example: a very large appliance -> true, a sudden applause -> false
*/

function vowelLinks(sentence) {
  const words = sentence.split(" ");
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < words.length - 1; i++) {
    const firstWordLastChar = words[i].at(-1).toLowerCase();
    const secondWordFirstChar = words[i + 1].at(0).toLowerCase();
    if (vowels.has(firstWordLastChar) && vowels.has(secondWordFirstChar))
      return true;
  }

  return false;
}

const runVowelLinks = () => {
  console.log(vowelLinks("a very large appliance"));
  console.log(vowelLinks("go to edabit"));
  console.log(vowelLinks("an open fire"));
  console.log(vowelLinks("a sudden applause"));
};
export { runVowelLinks };
