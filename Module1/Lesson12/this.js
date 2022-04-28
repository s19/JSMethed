//  'use strict';
//  Строгий режим 'use strict' - убирает привязку к глобальной видимости

//  this - контекс вызова
//  У ARROW function нет своего this!!!
// this всегда внешний контекст вызова(ссылается на обьект)
// во время вызова

// 4 правила
//  1.привязка по умолчанию

// {
//     function one () {
//         console.log('one', this);

//         //  Call side
//         two();
//     };

//     function two () {
//         console.log('two', this);

//         //  Call side
//         three();
//     };

//     function three () {
//         console.log('three', this);
//     };

//     //  debugger;

//     //  Call side
//     one();
// }

//  this существует только внутри функции
//  и определяется при вызове функции
//  так же зависит от того где и как вызывается

const a = 6;
//  a = 6;
//  thisFoo();

function thisFunction() {
    () => {
      console.log(this);
    };
  };

const barFoo = function() {
  () => {
    console.log(this);
  };
};

const obj = {
  x: 5,
  y: 15,
  foo() {
    console.log(this);
  },
  bar: barFoo,
};

obj.foo();
obj.bar();

//  console.log(bar());

//  берется контекст последнего обьекта
