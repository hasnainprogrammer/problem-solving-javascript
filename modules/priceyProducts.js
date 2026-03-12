/*
PROBLEM: You will be given an object with various consumer products and their respective prices. Return a list of the products with a minimum price of 500 in descending order.
example: {"Computer" : 600, "TV" : 800, "Radio" : 50} -> ["TV","Computer"]
*/

function priceyProducts(products) {
  return (
    Object.entries(products)
      // find all products that has minimum price of 500
      .filter((p) => p[1] >= 500)
      // sort the result in descending order
      .sort((a, b) => b - a)
      // return their names only
      .map((p) => p[0])
  );
}

const runPriceyProducts = () => {
  console.log(priceyProducts({ Computer: 600, TV: 800, Radio: 50 }));
  console.log(priceyProducts({ Bike1: 510, Bike2: 401, Bike3: 501 }));
  console.log(priceyProducts({ Loafers: 50, Vans: 10, Crocs: 20 }));
};
export { runPriceyProducts };
