'use strict'

const getRandomArray3 = (len, m, n, numType) => {
    const arr = [];
    arr.length = len;
    for (let i = 0; i <= len; i++) {
        if (n < m || type === 'even')
            arr[i] = Math.floor(Math.random() * ((m - n) / 2 + 1)) * 2 + n;
        else
            arr[i] = Math.floor(Math.random() * ((n - m) / 2 + 1)) * 2 + m;
    }
    return arr;
}

console.log(`Массив случайных чисел: ${getRandomArray3(10, 7, -4, 'even')}`);