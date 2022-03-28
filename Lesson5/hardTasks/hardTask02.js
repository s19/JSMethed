'use strict'

const num1 = prompt('Введите первое число');
const num2 = prompt('Введите второе число');

const getMin = (x, y) => {
    let n;
    n = x>y;
    console.log(typeof n);
    switch(n) {
        case true:
            n = y;
            break;
        case false:
            n = x;
            break;
    }
    return n;
};

console.log(`Min: ${getMin( num1, num2)}`);