'use strict'

const getStringReverse = (message) => {
    let str = message;
    return str.split('').reverse().join('');
};

console.log(`Обратная строка: ${getStringReverse("Привет мир")}`);