'use strict';

//  Замыкание

const z = 10;

const closeOne = () => {
  const x = 10;

  const closeTwo = (y) => {
    const closeThree = () => {
      const y = 15;
      return x + y;
    };
    x + y;
  };

  console.dir(closeTwo);


  return closeTwo(25);
};

console.log(closeOne());
