/******************************************************
 * Implementation with classes for educational purposes
 *
 * Author: Germán Aliprandi | galiprandi@gmail.com
 ******************************************************/

class Square {
  constructor(height, width, unit) {
    this.height = height
    this.width = width
    this.unit = unit
  }

  getArea() {
    return 'Area: ' + this.height * +this.width + this.unit
  }

  getPerimeter() {
    return 'Perimeter: ' + 2 * (+this.height + +this.width) + this.unit
  }
}

// Creating a new instance of Square
const MySquare = new Square(5, 8, 'cm')

const myArea = MySquare.getArea() // Area: 40cm
const myPerimeter = MySquare.getPerimeter() // Perimeter: 26cm

console.log(myArea, myPerimeter) // Area: 40cm Perimeter: 26cm
