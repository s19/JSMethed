'use strict';

let move;
(() => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const game = () => {
    const result = {
      playerMarbles: 5,
      botMarbles: 5,
    };


    const rspStart = window.rsp();
    rspStart();


    console.log('Старт игры');
    console.log(`Количество шариков\nИгрок: ${result.playerMarbles} \nБот: ${result.botMarbles}`);

    console.log('move: ', move);

    return function start() {
      if (result.botMarbles > 0 && result.playerMarbles > 0) {
        if (move === 1) {
          let playerNum = prompt('Введите загаданное вами число!');
          if (isNaN(playerNum) || playerNum === '') {
            alert('Введите число!');
            console.log('playerNum: ', typeof playerNum, playerNum);
            start();
          }
          if (playerNum !== null) {
            playerNum = +playerNum;
            if (playerNum <= result.playerMarbles) {
              const botGuessNumber = getRandomIntInclusive(1, 5);
              console.log('botGuessNumber: ', botGuessNumber);

              if ((botGuessNumber % 2 === 0 && playerNum % 2 === 0) || (botGuessNumber % 2 === 1 && playerNum % 2 === 1)) {
                result.botMarbles += playerNum;
                result.playerMarbles -= playerNum;
              } else {
                result.playerMarbles += playerNum;
                result.botMarbles -= playerNum;
              }
              move--;
              console.log(`Ответ бота: ${botGuessNumber % 2 === 0 ? 'четное' : 'нечетное'}`);
              console.log(`Количество шариков\nИгрок: ${result.playerMarbles} \nБот: ${result.botMarbles}`);
              start();
            }
            else {
              alert('Загадываемое число не должно превысить количество ваших шариков!');
              start();
            }
          }
        }
        else {
          const botGuessNumber = getRandomIntInclusive(1, result.botMarbles);
          console.log('botGuessNumber: ', botGuessNumber);
          if (result.botMarbles > 0 && result.playerMarbles > 0) {
            if (window.confirm('Четное число? ')) {
              console.log(`Мой ответ: четное`);
              if (botGuessNumber % 2 === 0) {
                result.playerMarbles += botGuessNumber;
                result.botMarbles -= botGuessNumber;
              } else if (botGuessNumber % 2 === 1) {
                result.playerMarbles -= botGuessNumber;
                result.botMarbles += botGuessNumber;
              }
            } else {
              console.log(`Мой ответ: нечетное`);
              if (botGuessNumber % 2 === 0) {
                result.playerMarbles -= botGuessNumber;
                result.botMarbles += botGuessNumber;
              } else if (botGuessNumber % 2 === 1) {
                result.playerMarbles += botGuessNumber;
                result.botMarbles -= botGuessNumber;
              }
            }
            move++;
            console.log(`Количество шариков\nИгрок: ${result.playerMarbles} \nБот: ${result.botMarbles}`);
            start();
          }
        }
      }
      else {
        alert(`Победитель: ${result.playerMarbles > result.botMarbles ? 'Вы' : 'Бот'}`);
      }
    };
  };
  window.marble = game;
})();
