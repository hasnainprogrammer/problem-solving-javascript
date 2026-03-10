/*
PROBLEM: Create a Circle class that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).
example:  const circle = new Circle(11); console.log(circle.getArea()); -> 380.132711084365
*/

class Circle {
  #PI = 3.14159;

  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    const r = this.radius;
    return this.#PI * r ** 2;
  }

  getPerimeter() {
    const r = this.radius;
    return 2 * this.#PI * r;
  }
}

const runCircle = () => {
  const circle = new Circle(11);
  console.log(circle.getArea());

  const circle2 = new Circle(4.44);
  console.log(circle2.getPerimeter());
};

export { runCircle };
