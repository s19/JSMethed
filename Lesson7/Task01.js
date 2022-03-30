'use strict'

{
    const animals = ['mouse', 'lion', 'elephant'];

    const printArr = arr => {
        console.log(`Размер массива ${arr.length}`);

        for (let i = 0; i < arr.length; i++) {
            const e = arr[i];
            let number = i + 1;
            console.log(`Элемент № ${number} - ${e}`);
        }

        for (const key in arr) {
            console.log(`Элемент под индексом ${key} - ${arr[key]}`);
        }

        for (const element of arr) {
            console.log(`Элемент ${element}`);
        }
    }
    
    const foo = function() {
        console.log(arguments);
        console.log(Array.isArray(arguments))
    }

    const numbers = [1, 2, [349, 127], 4, 5, 6, 7];

    const [ ,, [a, b, c = 51] ] = numbers;
    const [ x, y, ...newArray] = numbers;

    console.log('Destructured number a :', a);
    console.log('Destructured number b :', b);
    console.log('Destructured number c :', c);

    console.log('Destructured number x :', x);
    console.log('Destructured number y :', y);
    console.log('Destructured number newArray :', newArray);

    const strr = "Hello world!";
    const [firstSign, ...nextSigns] = strr;
    console.log(`${firstSign.toUpperCase()}` + nextSigns.join('').toLowerCase());

    const newNumbers = [21, 851, ...numbers, 7, 20]
    console.log(newNumbers);
    //foo(1,2,3,4);
    //console.log(Array.isArray([]));
    //printArr(animals);
}

const allStud = ['Иванов','Петров','Сидоров','Кузнецов','Смирнов','Попов','Соколов'];
const filedStud = ['Сидоров','Смирнов','Попов'];

const getfilterUnfailedStudents = () => {
}