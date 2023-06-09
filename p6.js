//class chape are done

class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }
  //this.sides = sides;
  perimeter = () =>
    this.sides.length > 0
      ? this.sides.reduce((total, side) => total + side)
      : 0;
}
console.log(new Shape([5, 10]).perimeter()); // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0

//rectangle done
class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
  }
  area = () => this.length * this.width;
}

console.log(new Rectangle(4, 4).perimeter()); // 16
console.log(new Rectangle(4, 4).area()); // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0

//triangle done
class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    super(sideA, sideB, sideC);
    //class = [sideA, sideB, sideC] {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
}
var s = "this.perimeterFunction/2";

return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));

console.log(new Triangle(3, 4, 5).perimeter()); // 12
console.log(new Triangle(3, 4, 5).area()); // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0

//part 6
// Array of sides arrays
// example of the case https://stackoverflow.com/questions/9704728/conditional-break-inside-of-switch-case

const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];
for (let sideAa of data) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
  switch (sideAa.length) {
    //done
    case 0:
      console.log("Shape with 0 sides unsupported");
    case 1:
      console.log("Shape with 1 side unsupported");
      break;
    case 2:
      let tang = [sideAa[0], sideAa[1], sideAa[2]];
      const rectangPer = new Shape([...tang]).perimeter();
      const rectangAns = new Ractangle([...sideAa]).area(
        (this.length = tang[0]),
        (this.width = rec[1])
      );
      if (sideAa[0] === sideAa[1]) {
        console.log(
          `Square with sides ${tang[0]}, ${tang[1]} has a perimeter of ${rectangPer} and an area of ${rectangAns}`
        );
      } else {
        console.log(
          `Rectangle with sides ${tang[0]}, ${tang[1]} has a perimeter of ${rectangPer} and am area of ${rectangAns}`
        );
      }
  }

  //copy and pasted from rectangle case
  //look at the game
  switch (sideAa.length) {
    case 3:
      let triangl = [sideAa[0], sideAa[1], sideAa[2]];
      //... operator expands an iterable into more elements
      //https://www.w3schools.com/jsref/jsref_operators.asp
      const triPer = new Shape([...triangl]).perimeter();
      //look back doesnt seem right if time 
      const triAns = new Triangle([...sideAa]).area(sideA,SideB,SideC
       // (this.length = tr[0]),
        //(this.width = tri[1])
      );
      console.log(`Triangle with sides ${sideAa[0]}, ${sideAa[1]}, s${ideAa[2]} has a perimeter of ${triPer} and an area of ${triAns}`)
      }
  }

