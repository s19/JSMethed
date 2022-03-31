'use strict'

const allСashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
];

const getAveragePriceGoods = ([...goods]) => {
    let tmpArr = goods;
    const arrLength = goods.length;
    let total = 0;
    for (let i = 0; i < tmpArr.length; i++) {
        const [count, sum] = tmpArr[i];
        total += Math.trunc(sum/count);
    }
    return Math.trunc(total/arrLength);
}

console.log(`Средняя стоимость товара: ${getAveragePriceGoods(allСashbox)} тг.`);