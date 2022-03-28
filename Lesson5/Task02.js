'use strict'

const capitalizeFirstLetter = (message) => {
    let str = message;
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
};

console.log(`Строка с заглавной первой буквой: ${capitalizeFirstLetter("привет Мир")}`);