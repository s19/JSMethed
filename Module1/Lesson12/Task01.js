//  Строгий режим
//  'use strict' - убирает привязку к глобальной видимости this
'use strict';

{
  const foo = ([...arr]) => {
    const min = 0;
    const max = 10;
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    arr.push(randomNumber);
    let sumArr = 0;
    arr.forEach(element => {
      sumArr += element;
    });
    if (sumArr > 50) {
      console.log('Array summ: ', sumArr);
      return arr;
    } else {
      return foo(arr);
    }
  };

  const arr = [9, 12, -2, -17, 6];
  console.log(foo(arr));
}
