'use strict'

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = ([...names], prefix) => {
    let tmpArr = names;
    for (const key in tmpArr) {
        tmpArr[key] = prefix + ' ' + tmpArr[key];
    }
    return tmpArr;
}

console.log(addPrefix(names, 'Mr'));