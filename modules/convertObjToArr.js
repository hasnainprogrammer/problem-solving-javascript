/*
PROBLEM: write a function that takes an object as an input and returns an array which contains each key/value pairs of the object as an array. if an empty object is passed then return an empty array.
example: { a: 1, b: 2 } -> [[a, 1], [b, 2]], {} -> []
*/

function convertObjToArr(obj) {
  return Object.entries(obj);
}

const runConvertObjToArr = () => {
  console.log(convertObjToArr({ a: 1, b: 2 }));
  console.log(convertObjToArr({ shrimp: 15, tots: 12 }));
  console.log(convertObjToArr({}));
};
export { runConvertObjToArr };
