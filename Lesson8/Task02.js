'use strict'

const getRandomArray2 = (len, m, n) => {
    const arr = [];
    arr.length = len;
    for (let i = 0; i <= len; i++) {
        if (n < m)
            arr[i] = Math.floor(Math.random() * (m - n + 1) ) + n;
        else
            arr[i] = Math.floor(Math.random() * (n - m + 1) ) + m;
        
    }
    return arr;
}

console.log(`Массив случайных чисел: ${getRandomArray2(10, 7, -4)}`);