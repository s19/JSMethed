'use strict';

//  Область видимости
//  часть кода из которой
//  виден идентификатор

//  Глобальный контекст

//  Лексический контекст (набор идентификаторов
//  связанный с определенными значениями в рамках
//  функции или блока кода (циклов/условий и т.д.)
//  и определяется во время вызова )

//  scope - определяется при инициализации
const x = 5;
console.log(x);

const scopeOne = (y, z) => {
  //    LexicalEnvironment = {y: 25, z: undefined}
  //    scope = GlobalScope {x: 5, scopeOne}
  const x = 15;
  //  LexicalEnvironment = {x: 15, y: 25, z: undefined}
  console.log(x, y, z);
  const scopeTwo = () => {
    //  LexicalEnvironment = {}
    //  Разрешение переменной -> идет в след scope
    //  scope = scopeOne.LexicalEnvironment = {x: 15, y: 25, z: undefined}
    const x = 25;
    console.log(x);
  };

  scopeTwo();
};

scopeOne(25);
