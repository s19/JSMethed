'use strict'

/// Task_Hard_2
{
    /// constants
    const income = prompt("Введите сумму дохода:");
    let loan = 0;

    if (income <= 15000) {
        loan = income * 0.13;
    } else if (income > 15000 && income < 50000) {
        loan = income === 15000 ? (income * 0.2) : ((income % 15000) * 0.2);
    } else {
        loan = income === 50000 ? (income * 0.3) : ((income % 50000) * 0.3);
    }
    console.log(loan);
}