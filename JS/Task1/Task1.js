'use strict';

let money, time;

function start(){
    money = +prompt('How much is your month budget?');
    time = prompt('Date input YYYY-MM-DD');
    while(isNaN(money) || money == "" || money == null){
        alert('Enter data');
        money = +prompt('How much is your month budget?');
    }
 }
start();

let appData ={
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses(){
    mark: for (let i = 0; i < 2; i++) {
        let a = prompt('Mandatory expenses'),
            b = prompt('How much?', '');
       if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
           && a != '' && b != '' && a.length < 50){
               console.log("done");
           appData.expenses[a] = b;  
       } else {
           alert('Enter correct data')
           i--;
           continue mark;
       }     
    }
}
chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert('1 day budget is ' + appData.moneyPerDay); 
}
detectDayBudget();

function detectLevel(){
    if(appData.moneyPerDay <100){
        console.log('Minimum day salary');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log('Medium day salary');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Hight day salary');
    } else {
        console.log('Error');
    }
}
detectLevel();

function checkSavings(){
    if(appData.savings === true){
        let save = +prompt("Type here your bank savings information");   
        while(isNaN(save) || save == "" || save == null){
                alert('Enter correct data');
                save = +prompt('Type here your bank savings information');
        }
        let percent = +prompt("Type here bank percent");
        while(isNaN(percent) || percent == "" || percent == null){
            alert('Enter correct data');
            percent = +prompt('Type here bank percent');
        }
        appData.monthIncome = (save/100/12*percent).toFixed(2);
        alert("Your deposit month income is " + appData.monthIncome);
    }   else{
        alert("You don't have savings");
    }
}
checkSavings();

function chooseOptExpenses(){
    for( let e = 3; e > 0; e--){
        while (e == 3){
            let x = prompt('First non-mandatory item');
            if(x != '' && typeof(x) != null){
                let y = +prompt('How much?');
                appData.optionalExpenses[x] = y;
            }
            e--;
        }
        while (e == 2){
            let x = prompt('Second non-mandatory item');
            if(x != '' && typeof(x) != null){
                let y = +prompt('How much?');
                appData.optionalExpenses[x] = y;
            }
            e--;
        }
        while (e == 1){
            let x = prompt('Third non-mandatory item');
            if(x != '' && typeof(x) != null){
                let y = +prompt('How much?');
                appData.optionalExpenses[x] = y;
            }
            e--;
        }
        
    }  
}
chooseOptExpenses();





