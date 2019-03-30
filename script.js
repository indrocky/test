 'use strict';

// var a = 5;
// console.log(a);

// console.log(4/0);
// console.log('string');

// let something;
// console.log(something)

// let persone ={
//     name: "John",
//     age: 25,
//     isMaried: false
// };
// console.log(persone.name);
// console.log(persone ["name"]);

// let arr = ['plum.png','orange.jpg','apple.bmp'];
// console.log(arr[0]);
// //let answer = confirm("Are you here?");
// //console.log(answer);
// // let answer = +prompt("Есть ли Вам 18?","Да");
// // console.log(typeof(answer));
// // console.log("arr" + " - object");
// // console.log(4 + +" - object");
// let incr = 10,
//     decr = 10;
// console.log(incr++);
// console.log(--decr);
// console.log(5%2);
// console.log("2" == 2);
// console.log("2" === 2);
// let isChecked = true,
//     isClose = false;
// console.log(isChecked && isClose);
// console.log(isChecked && !isClose);
// console.log(isChecked || isClose);

let num = 50;
switch (num) {
    case num < 49:
        console.log('wrong');
        break;
    case num > 100:
        console.log('much');
        break;
    case 50:
        console.log('right');
        break;
    default:
        console.log('something wrong');
        break;
}
var num1 = 50;
// while (num1 < 55) {
//     console.log(num1);
//     num1++;
// }
do{
    console.log(num1);
    num1++;
}
while (num1 < 55);
for (let i = 1; i < 8; i++) {
    if(i == 6) {
        continue;
    }
    console.log(i);
}

console.log(2 && 1 && null && 0 && undefined );