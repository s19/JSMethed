'use strict'

const getRandomArray = (len, max = 100) => {
    const arr = [];
    arr.length = len;
    for (let i = 0; i <= len; i++) {
        arr[i] = Math.round(Math.random() * max);
    }
    return arr;
}

console.log(`Массив случайных чисел: ${getRandomArray(10)}`);