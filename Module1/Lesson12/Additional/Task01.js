'use strict';

{
  const rectangle = {
    width: 5,
    height: 5,
    setwidth(newWidth) {
      this.width = +newWidth;
    },
    setheight(newheight) {
      this.height = +newheight;
    },
    get perimeter() {
      return (this.height + this.width) * 2 + ' см';
    },
    get area() {
      return (this.height * this.width) + ' см';
    },
  };

  rectangle.setwidth(74);
  rectangle.setheight(55);
  console.log(`P: ${rectangle.perimeter}`);
  console.log(`S: ${rectangle.area}`);
}
