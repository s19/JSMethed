'use strict';

{
  const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    discount: 0,
    get TotalPrice() {
      let totalPrice = 0;
      this.items.forEach(element => {
        totalPrice += (element.price * element.count);
      });
      return totalPrice - (totalPrice * this.discount / 100);
    },
    add(name, price, count = 1) {
      const item = {
        name,
        price,
        count,
      };
      this.items.push(item);
      this.increaseCount(count);
    },
    increaseCount(count) {
      this.count += count;
    },
    setDiscount(promocode) {
      switch (promocode) {
        case 'METHED':
          this.discount = 15;
          break;
        case 'NEWYEAR':
          this.discount = 21;
          break;
        default:
          break;
      }
    },
    calculateItemPrice() {
      return `Total price ${this.TotalPrice}`;
    },
    clear() {
      this.items = [], this.totalPrice = 0, this.count = 0;
    },
    print() {
      console.log(JSON.stringify(this.items));
      console.log(this.calculateItemPrice());
    },
  };

  cart.add('Maseratti S7', 150000000, 2);
  cart.add('BMW X6', 587000000, 3);
  cart.add('Daewoo Matiz', 107000, 7);

  //    Initial
  cart.print();

  // cart.clear();
  // cart.print();
  // console.log(cart.calculateItemPrice());

  //    Discount "METHED"
  cart.setDiscount('METHED');
  cart.print();

  //    Discount "NEWYEAR"
  cart.setDiscount('NEWYEAR');
  cart.print();
}
