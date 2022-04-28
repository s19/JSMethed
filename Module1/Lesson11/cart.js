'use strict';

{
  const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    get TotalPrice() {
      let totalPrice = 0;
      this.items.forEach(element => {
        totalPrice += (element.price * element.count);
      });
      return totalPrice;
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
    calculateItemPrice() {
      return `Total price ${this.TotalPrice}`;
    },
    clear() {
      this.items = [], this.totalPrice = 0, this.count = 0;
    },
    //  Выводит в консоль JSON строку из массива items
    //  и на следующей строке выводит общую стоимость корзины
    print() {
      console.log(JSON.stringify(this.items));
      console.log(this.calculateItemPrice());
    },
  };

  cart.add('Maseratti S7', 150000000, 2);
  cart.add('BMW X6', 587000000, 3);
  cart.add('Daewoo Matiz', 107000, 7);
  cart.print();

  // cart.clear();
  // cart.print();
  // console.log(cart.calculateItemPrice());
}
