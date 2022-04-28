'use strict'
var ERROR = [];

{
    // console.log("Ok");
    // console.log('ананс' > 'букварь');
    // console.log('ананс' < 'букварь');

    // // ЁёАаБбВв ...

    // console.log(null == undefined);

    // console.log(true > 2);
    // console.log(true < 2);
    // console.log(3 >= 2);
    // console.log(3 <= 2);

    // console.log(5 === '5');
    // console.log(5 !== 6);

    // console.log(false != 1); // dont't use
    // console.log(false == 1); // dont't use


    // console.log(true || true);
    // console.log(true || false);
    // console.log(false || true);
    // console.log(false || false);

    // console.log(true && true);
    // console.log(true && false);
    // console.log(false && true);
    // console.log(false && false);
}

{
    // let num1 = 0;
    // let num2 = '';
    // let num3 = null;
    // // Слева направо (до того как значение не будет равно true)
    // console.log(num1 || num3 || num2);

    // // Слева направо (до того как значение не будет равно false)
    // console.log(num3 && num2 && num1);

    // // Приоритет всегда у && - первым
}

{
    // let money = 500;
    // if (money >= 300) {
    //     console.log('Купим биг мак');
    // } else if (money >= 100) {
    //     console.log('Купим шаурму');
    // } else {
    //     console.log('Купим конфету');
    // }
}

{
    // let discount = 0;
    // const price = 1000;
    // const clientstatus = 'Приятель';

    // // if (clientstatus === 'Приятель') {
    // //     discount = price * 0.05;
    // // }
    // // if (clientstatus === 'Друг') {
    // //     discount = price * 0.08;
    // // }
    // // if (clientstatus === 'Лучший друг') {
    // //     discount = price * 0.1;
    // // }
    // switch (clientstatus) {
    //     case "Приятель":
    //         discount = price * 0.05;
    //         console.log('Приятель');
    //         break;
    //     case "Друг":
    //         discount = price * 0.08;
    //         console.log('Друг');
    //         break;
    //     case "Лучший друг":
    //         discount = price * 0.1;
    //         console.log('Лучший друг');
    //         break;
    //     default:
    //         discount = 0;
    //         break;
    // }
    
    // const totalprice = price - discount;
    // console.log('Total price: ', totalprice);
}

{
    // const a = 5;
    // const b = 15;

    // const res = a > b ? a : b;
    // console.log('res:', res);
}

{
    /// Variables
    const goodArr = ["наименование", "количество", "категорию", "цену"]
    const item = setGoodsProperties(goodArr[0]);
    const count = setGoodsProperties(goodArr[1]);
    const category = setGoodsProperties(goodArr[2]);
    const price = setGoodsProperties(goodArr[3]);
    let template = "На складе cnt еденицы товара \"ttl\" на сумму sum тенге";
    /// Changing variable, not by `${}`
    template = template.replace("cnt", count).replace("ttl", item).replace("sum", (count * price));
    if (ERROR.length > 0) {
        console.log(ERROR[0]);
    }
    else {
        console.log(template); 
    }   
}

function setGoodsProperties(title) {   
    /// Update Error
    ERROR = [];
    /// Ask user
    let typedProp = prompt(`Введите ${title} товара`);
    let ifNumber = isNaN(typedProp);

    /// Check if not number count or price
    if ((title === "количество" || title === "цену") && ifNumber === true) {
        ERROR.push("Вы ввели некорректные данные");
    }
    return typedProp;
}