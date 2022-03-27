'use strict'

var ERROR = [];

{
  const item = 'smart проектор philips';
  const count = 15;
  const category = 'видео техника';
  const price = 1200;

  //console.log(item);
  //console.log(`общая сумма товара: ${count * price}`);
}

{
    const item = 'smartphone Huawei FIG-LX1';
    const count = 31;
    const category = 'смартфон';
    const price = 18000;
  
    //console.log(item);
    //console.log(`общая сумма товара: ${count * price}`);
}

{
  /// Variables
  const goodArr = ["наименование", "количество", "категорию", "цену"]
  const item = setGoodsProperties(goodArr[0], 1);
  const count = setGoodsProperties(goodArr[1], 2);
  const category = setGoodsProperties(goodArr[2], 3);
  const price = setGoodsProperties(goodArr[3], 4);
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

function setGoodsProperties(title, indx) {   
  ERROR = []; 
  let typedProp = prompt(`Введите ${title} товара`);
  const tmp = typedProp * 1;
  if (indx === 2 || indx === 4) {
    typedProp = Number.isNaN(tmp) == false ? Number(typedProp) : ERROR.push("Вы ввели Вы ввели некорректные данные");
  }

  return typedProp;
}