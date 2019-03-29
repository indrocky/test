let num = 50;
if(num < 49 ){
    console.log('wrong')
} else if (num > 100) {
    console.log('much')
} else {
    console.log('right1')
};

(num == 50) ? console.log('right2') : console.log('wrong');

switch (num) {
    case num < 49:
        console.log('wrong');// неверная конструкция. Swithc не
        break;//читает знаки сравнения
    case num > 100:
        console.log('much');
        break;
    case 50:
        console.log('right3');
        break;  
    default:
        console.log('smthng wrong');
        break;
}