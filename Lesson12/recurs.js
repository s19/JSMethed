'use strict';

{


  //   const foo = (obj) => {
  //     console.log(obj.c++);
  //     foo(obj);
  //   };

  //    foo({c: 0});
}

{
  //    Хвостовые рекурсивные функции
  //    Когда используем рекурсию - используется стек (аргументы,
  //    локальные в стек все идет)
  //    Проще короче красивее
  //    Когда Рекурсия:
  //    1. Если пишем в функциональном стиле
  //    2. Если хватает глубины call stack
  //    3. Если красиво
  //    Если нужен быстрый - цикл

  const bar = (x) => {
    x *= 2;
    if (x > 100) {
      return x;
    }
    return foo(x);
  };

  //    console.log(fooBar(2));


  const foo = (x) => {
    x *= 3;
    if (x > 100) {
      return x;
    }
    return bar(x);
  };

  //    console.log(foo(2));

  const pow = (n, power) => {
    if (power === 1) {
      return n;
    } else {
      return pow(n, power - 1) * n;
    }
  };

  console.log(pow(5, 10));


  const factorial = n => {
    if (n === 1) {
      return 1;
    } else {
      return factorial(n - 1) * n;
    }
  };

  console.log(factorial(8));

  const fibo = n => {
    if (n <= 2) {
      return 1;
    } else {
      return fibo(n - 1) + fibo(n - 2);
    }
  };

  console.time('fibo');
  console.log(fibo(40));
  console.timeEnd('fibo');

  const fibo2 = n => {
    let a = 1;
    let b = 0;
    let c = 0;
    while (n > 0) {
      c = a + b;
      b = a;
      a = c;
      n -= 1;
    }
    return b;
  };

  console.time('fibo2');
  console.log(fibo2(100));
  console.timeEnd('fibo2');
}
