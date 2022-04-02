'use strict';

{
    const guessNumberGame = (num) => {
        let userNumber = prompt("Введите любое число!");
        if (userNumber === null) return;
        if (isNaN(userNumber)){
            alert("Введи число!");
            return guessNumberGame(num);
        }
        if (num === +userNumber){
            alert("Правильно!"); 
            return;
        }
        (+userNumber > num) ? alert("Меньше!") : alert("Больше!");
        return guessNumberGame(randInt);
    }
    const randInt = Math.floor(Math.random() * 100);
    console.log(`randomNumber: ', ${randInt}`);
    guessNumberGame(randInt);
}