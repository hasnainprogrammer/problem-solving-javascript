/*
PROBLEM: Turn each character in a string str into its ASCII character code and join them together to create a number.
For example, for string "abc", the number is 979899. We will call this number "num1".
Then replace any incidence of the number 7 with the number 1, and call this number "num2".
Return the difference between the sum of the digits in num1 and num2:
- Lowercase and uppercase characters have different ASCII character codes.
example: "ABCDabcd" -> 12, "cdefgh" -> 0
*/

const convertStringToAsciiSequence = (inputString) => {
  let asciiSequence = "";

  for (let i = 0; i < inputString.length; i++) {
    asciiSequence += inputString.charCodeAt(i);
  }

  return asciiSequence;
};

const replaceSevensWithOnes = (numericString) =>
  numericString.replaceAll("7", "1");

const getDigitSum = (numericString) =>
  numericString.split("").reduce((total, digit) => total + Number(digit), 0);

function calculateAsciiDifference(inputString) {
  const originalAsciiString = convertStringToAsciiSequence(inputString);
  const modifiedAsciiString = replaceSevensWithOnes(originalAsciiString);

  const originalSum = getDigitSum(originalAsciiString);
  const modifiedSum = getDigitSum(modifiedAsciiString);

  return originalSum - modifiedSum;
}

const runCalculateAsciiDifference = () => {
  console.log(calculateAsciiDifference("ABCDabcd"));
  console.log(calculateAsciiDifference("cdefgh"));
  console.log(calculateAsciiDifference("ifkhchlhfde"));
};

export { runCalculateAsciiDifference };
