/******************************************************
 * Implementation with function for educational purposes
 *
 * Author: Germán Aliprandi | galiprandi@gmail.com
 ******************************************************/

function Square(height, width, unit) {
  this.getArea = () => {
    return 'Area: ' + height * +width + unit
  }

  this.getPerimeter = () => {
    return 'Perimeter: ' + 2 * (+height + +width) + unit
  }
}

// Creating a new instance of Square
var MySquare = new Square(5, 8, 'cm')

const myArea = MySquare.getArea()
const myPerimeter = MySquare.getPerimeter()

console.log(myArea, myPerimeter) // Area: 40cm Perimeter: 26cm
