'use strict';

/// Наименование
const goodTitle = "Блокнот";
/// Кол-во может изменятся
let goodCount = 547;
/// Категория согласно единому справочнику
/// 2 - Канцтовары
const goodCategoryID = 2;
/// Цена может изменятся
let goodPrice = 250;

let totalPrice = goodCount * goodPrice;

console.log(goodTitle);
console.log(totalPrice);