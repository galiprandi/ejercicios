/******************************************************
 * Implementation with objet for educational purposes
 *
 * Author: Germán Aliprandi | galiprandi@gmail.com
 ******************************************************/

const Square = {
  getArea(height, width, unit) {
    return 'Area: ' + +height * +width + unit
  },

  getPerimeter(height, width, unit) {
    return 'Perimeter: ' + 2 * (+height + +width) + unit
  },
}

const myArea = Square.getArea(5, 8, 'cm')
const myPerimeter = Square.getPerimeter(5, 8, 'cm')

console.log(myArea, myPerimeter) // Area: 40cm Perimeter: 26cm
