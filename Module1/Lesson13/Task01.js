'use strict';

//  Самовызывающаяся функция - (() => {}()) или (function() {}())
//  const factory = (() => {
window.factory = (() => {
  const isNumber = (x) => {
    if (!Number.isNaN(parseFloat(x)) && isFinite(x)) {
      return +x;
      
    } else {
      null;
    }
  };

  const sum = (a) => {
    a = isNumber(a);
    if (a) {
      return (b) => a + b;
    } else {
      return null;
    }
  };


    //    window.factorySum = sum;

    //   return {
    //     sum,
    //     //  more,
    //   };

    return sum;

})();
