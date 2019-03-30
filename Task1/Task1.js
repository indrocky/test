'use strict';

let money = +prompt('How much is your month budget?'),
    time = prompt('Date input YYYY-MM-DD');
let appData ={
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

 for (let i = 0; i < 2; i++) {
    let a = prompt('Mandatory expenses', ''),
        b = prompt('How much?', '');
    if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50){
            console.log("done");
        appData.expenses[a] = b;  
    } else {

    }
      
}
appData.moneyPerDay = appData.budget / 30;
alert('1 day budget is ' + appData.moneyPerDay);
if(appData.moneyPerDay <100){
    console.log('Minimum day salary');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log('Medium day salary');
} else if (appData.moneyPerDay > 2000) {
    console.log('Hight day salary');
} else {
    console.log('Error');
}






