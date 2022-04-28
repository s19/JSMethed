'use strict'
{
    const companyName = 'Google';
    const field = 'IT';

    const obj = new Object();
    console.log(obj);

    const user = {};
    console.log(`User: ${user}`);

    const objNew = Object.create(null);
    console.log(objNew);

    const usr = {
        companyName,
        field,
        tagLine: 'The best ever',
        'most popular auto': 'Toyota Camry',
        supportedBrands: ['BMW', 'Mercedes Benz', 'Toyota', 'Mazda'],
        employeeNumber: 10478,
        status: {
            working: true,
            lisense: true,
            cities: ['Astana', 'Moscow'],
        },
        callTaxi() {
            console.log('Plaease call 8888!');
        },
    }
    console.log('User',usr);
    /// Если свойство состоит из нескольких слов
    console.log(usr['most popular auto']);

    usr.CEO = 'Alex';

    usr.callTaxi();
}

{
    const element = {
        tagName: 'div',
        className: 'container',
    };

    const decorObj = obj => {
        obj.prop = 'That\'s great';
    };

    decorObj(element);
    console.log('element', element);
}

{

    const companyName = 'Facebook';
    const field = 'Messager';

    const company = {
        companyName,
        field,
        tagLine: 'The best ever',
        'most popular auto': 'Toyota Camry',
        supportedBrands: ['BMW', 'Mercedes Benz', 'Toyota', 'Mazda'],
        employeeNumber: 10478,
        status: {
            working: true,
            lisense: true,
            cities: ['Astana', 'Moscow'],
        },
        callTaxi() {
            console.log('Plaease call 8888!');
        },
    };

    // for (const prop in company) {
    //     console.log(`company.${prop} = ${company[prop]}`);
    // }
    const keys = Object.keys(company);

    for (const key in keys) {
        console.log(`company.${key} = ${company[key]}`);
    }

    const values = Object.values(company);
    for (const value of values) {
        console.log(`value: ${value}`);
    }

    const valuesEntries = Object.entries(company);
    for (const [key, value] of valuesEntries) {
        console.log(key, value);
    }

    const arrNew = [
        [
            'companyName',
            'Facebook'
        ],
        [
            'field',
            'IT'
        ],
        [
            'tagLine',
            'The best ever'
        ],
    ];

    const objFromArr = Object.fromEntries(arrNew);
    /// по имени свойства
    console.log(objFromArr.hasOwnProperty('tag'));
}

{
    const obj1 = {
        a: 1,
        b: {
            a: 2
        },
    };
    const obj2 = {
        c: 5,
        b: {
            d: 4
        },
    };

    /// Assign - поверхностное слияние, вложенные обьекты заменяются
    const obj3 = Object.assign({}, obj1, obj2, {a: 58});
    console.log('obj1', obj3);

    const obj4 = {...obj1};
    
}