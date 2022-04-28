'use strict';

(() => {
  const DIC_RUS = ['камень', 'ножницы', 'бумага',
    'Введите первую букву или полное название элемента!',
    'Хотите выйти из игры?', 'Компьютер', 'Вы',
    'Результат', 'Победитель', 'Ничья', 'к', 'н', 'б', 'ка', 'но', 'бу'];
  const DIC_ENG = ['rock', 'scissors', 'paper',
    'Enter the first letter or the full name of the element!',
    'Do you want to quit?', 'Computer', 'You',
    'Result', 'Winner', 'Draw', 'r', 's', 'p', 'ro', 'sc', 'pa'];

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const game = (language) => {
    const result = {
      human: 0,
      computer: 0,
    };

    const lang = language === 'EN' || language === 'ENG' ? DIC_ENG : DIC_RUS;

    return function start() {
      let myMove = prompt(`${lang[0]}, ${lang[1]}, ${lang[2]}`);

      if (myMove !== null) {
        myMove = myMove.toLowerCase();
        const randNum = getRandomIntInclusive(1, 3);
        let compMove = 0;
        switch (randNum) {
          case 1:
            compMove = lang[0];
            break;
          case 2:
            compMove = lang[1];
            break;
          case 3:
            compMove = lang[2];
            break;
          default:
            break;
        }

        if (myMove.charAt(0) === lang[10] || myMove.includes(lang[13])) {
          myMove = lang[0];
        } else if (myMove.charAt(0) === lang[11] || myMove.includes(lang[14])) {
          myMove = lang[1];
        } else if (myMove.charAt(0) === lang[12] || myMove.includes(lang[15])) {
          myMove = lang[2];
        } else {
          alert(lang[3]);
        }

        if ((myMove === lang[0] && compMove === lang[1]) || (myMove === lang[1] && compMove === lang[2]) || (myMove === lang[2] && compMove === lang[0])) {
          result.human += 1;
          alert(`${lang[5]}: ${compMove}  \n${lang[6]}: ${myMove}\n${lang[8]}: ${lang[6]}!`);
          console.log(compMove + ' ' + myMove);
        } else if ((myMove === lang[1] && compMove === lang[0]) || (myMove === lang[2] && compMove === lang[1]) || (myMove === lang[0] && compMove === lang[2])) {
          result.computer += 1;
          alert(`${lang[5]}: ${compMove}  \n${lang[6]}: ${myMove}\n${lang[8]}: ${lang[5]}!`);
          console.log(compMove + ' ' + myMove);
        } else if ((myMove === lang[0] && compMove === lang[0]) || (myMove === lang[1] && compMove === lang[1]) || (myMove === lang[2] && compMove === lang[2])) {
          alert(`${lang[5]}: ${compMove}  \n${lang[6]}: ${myMove} \n${lang[9]}`);
          console.log(compMove + ' ' + myMove);
        }

        if (result.computer > result.human) {
          move = 0;
        } else if (result.computer < result.human) {
          move = 1;
        } else {
          start();
        }
      } else {
        if (!confirm(lang[4])) {
          start();
        } else {
          alert(`${lang[7]} \n${lang[5]}: ${result.computer}  \n${lang[6]}: ${result.human}`);
        }
      }
    };
  };

  window.rsp = game;
})();
