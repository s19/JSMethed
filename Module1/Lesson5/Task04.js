'use strict'

const calculate = (sum, cnt, prm) => {
    let total = sum;
    let count = cnt;
    let promo = prm;

    total = count > 10 ? total * 0.03 : total;
    total = total > 30000 ? (total % 30000) * 0.15 : total;
    total = promo === "METHED" ? total * 0.1 : total;
    total = total > 2000 && promo === "G3H2Z1" ? total - 500 : total;

    return total.toFixed(2);
};

console.log(`Стоимость: ${calculate(7412589, 11, "METHED")}`);