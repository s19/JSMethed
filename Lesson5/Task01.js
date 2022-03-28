'use strict'

const euroToUSD = 1.2;
const usdToRu   = 73;

const convertToRu = (costEUR) => {
    let eur = costEUR;
    return (eur * euroToUSD) * usdToRu;
};

console.log(`Стоимость в рублях: ${convertToRu(1230)} руб.`);