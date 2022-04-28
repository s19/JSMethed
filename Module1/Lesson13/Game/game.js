'use strict';

(() => {
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

    return function start() {
      let myMove = prompt('камень, ножницы, бумага?');

      if (myMove !== null) {
        myMove = myMove.toLowerCase();
        const randNum = getRandomIntInclusive(1, 3);
        let compMove = 0;
        switch (randNum) {
          case 1:
            compMove = 'камень';
            break;
          case 2:
            compMove = 'ножницы';
            break;
          case 3:
            compMove = 'бумага';
            break;
          default:
            break;
        }
        if (myMove.charAt(0) === 'к' || myMove.includes('ка')) {
          myMove = 'камень';
        } else if (myMove.charAt(0) === 'н' || myMove.includes('но')) {
          myMove = 'ножницы';
        } else if (myMove.charAt(0) === 'б' || myMove.includes('бу')) {
          myMove = 'бумага';
        } else {
          alert('Введите первую букву или полное название элемента!');
        }

        if ((myMove === 'камень' && compMove === 'ножницы') || (myMove === 'ножницы' && compMove === 'бумага') || (myMove === 'бумага' && compMove === 'камень')) {
          result.human += 1;
          alert(`Компьютер: ${compMove}  \nВы: ${myMove}\nВы выграли!`);
          console.log(compMove + ' ' + myMove);
        } else if ((myMove === 'ножницы' && compMove === 'камень') || (myMove === 'бумага' && compMove === 'ножницы') || (myMove === 'камень' && compMove === 'бумага')) {
          result.computer += 1;
          alert(`Компьютер: ${compMove}  \nВы: ${myMove}\nКомпьютер выиграл!`);
          console.log(compMove + ' ' + myMove);
        } else if ((myMove === 'камень' && compMove === 'камень') || (myMove === 'ножницы' && compMove === 'ножницы') || (myMove === 'бумага' && compMove === 'бумага')) {
          alert(`Компьютер: ${compMove}  \nВы: ${myMove} \nНичья!`);
          console.log(compMove + ' ' + myMove);
        }

        start();
      } else {
        if (!confirm('Хотите выйти из игры?')) {
          start();
        } else {
          alert(`Компьютер: ${result.computer}  \nВы: ${result.human}`);
        }
      }
    };
  };

  window.rockPaperScissors = game;
})();
