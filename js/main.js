/* CLASS WORK */

/*
function addNumber(num1, num2) {
    console.log(num1 + num2);
}

let number1 = Number(prompt(1-son))
let number2 = Number(prompt(2-son))

addNumber(number1, number2)
*/

/*
function addNumber(num1, num2, num3) {
    console.log((num1 + num2)/num3);
}

let number1 = Number(prompt(1-son))
let number2 = Number(prompt(2-son))
let number3 = Number(prompt(3-son))

addNumber(number1, number2, number3)
*/

/*
function urtaArifmetikniMAthroundQilibTop(num1, num2) {
    return Math.round((num1 + num2)/2)
}

console.log(urtaArifmetikniMAthroundQilibTop(4,10));
*/

/*
function convert(degree, gradus) {
    if (degree==='c') {
        return (gradus*(5/9)+32)
    }
    else if (degree==='f') {
        return ((gradus-32)*(5/9))
    }

    return null;
}

console.log(convert('c', 157));
console.log(convert('f', 200));
*/

/* HOME WORK 1 */

function birja(narx, valyuta) {
    if(valyuta === "usd") {
        return narx * 11329;
    }
    if(valyuta === "rub") {
        return narx * 143;
    }
} 

let sum = Number(prompt('Narx kiriting!'));
let pul = prompt('enter dollar = "usd", ruble = "rub"');

console.log(birja(sum, pul));

/* HOME WORK 2 */

function random() {
    return Math.round(Math.random()*1000000)
}

console.log(random());
