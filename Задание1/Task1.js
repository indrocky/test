'use strict';

let money = prompt('How much is your month budget?');
let time = prompt('Date input YYYY-MM-DD');
let exp = prompt('Mandatory expenses')
let exp1 = prompt('How much?')
let appData ={
    budget: money,
    date: time,
    expenses: {
        exp,
        exp1
    },
    // optionalExpenses,
    // income,
    // savings: false
};
alert(appData.budget / appData.expenses.exp1 / 30);






