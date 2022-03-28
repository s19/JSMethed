'use strict'

const getGCD = (...arg) => {
    let arr = arg;
    let n = arr.length;
    let x = Math.abs(arr[0]);
    for (var i = 1; i < n; i++) { 
        let y = Math.abs(arr[i]);
        while (x && y) { 
            x > y ? x %= y : y %= x; 
        }
        x += y;
    }
    return x;
};

console.log(`НОД: ${getGCD( 25, 45)}`);