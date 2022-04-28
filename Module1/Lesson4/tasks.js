'use strict'

/// Task 2
{
    /// constants
    const rainy = "Пошёл дождь.Возьмите зонт!";
    const sunny = "Дождя нет!";
    let weather = "";

    /// Getting random 0 or 1
    const rain = getRandomInt();

    /// Checking for message
    if (rain === 0) {
        weather = sunny;
    } else if (rain === 1) {
        weather = rainy;
    } else {
        weather = "Пасмурно! Непонятно ...";
    }
    console.log(weather);

    function getRandomInt() {
        return Math.round(Math.random());
    }
}

/// Task 3
{
    /// constants
    const mathematic        = prompt("Введите кол-во баллов по математике:");
    const russianLanguage   = prompt("Введите кол-во баллов по русскому языку:");
    const informatic        = prompt("Введите кол-во баллов по информатике:");
    
    console.log(checkGrant(mathematic, russianLanguage, informatic));

    function checkGrant(a,b,c) {
        const msgSuccess = "Поздравляю, вы поступили на бюджет!";
        const msgFail = "Печально, вы будете платить!";
        const sum = Number(a) + Number(b) + Number(c);
        console.log(sum);
        if (sum >= 265) {
            return msgSuccess;
        } else {
            return msgFail;
        }
    }
}

/// Task 4
{
    /// constants
    const money = prompt("Введите сумму для снятия:");
    const minBill = 100;

    if (money % minBill === 0) {
        console.log("Возьмите деньги! Не забудьте забрать вашу карту!");
    } else {
        const max = Math.round(money - (money % minBill));
        console.log(`Максимальная сумма для изьятия:${max}, минимальная купюра - ${minBill} тенге`);
    }
}