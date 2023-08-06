//task1
let button1 = document.querySelector('.b-1');
let out1 = document.querySelector('.out-1');
let a1 = 3;
function t1() {
    out1.innerHTML = a1;
}
button1.onclick = t1;


//task2

let button2 = document.querySelector('.b-2');
let out2 = document.querySelector('.out-2');
let a2 = 6;
let b2 = 3;
function t2() {
    return a2;
}
button2.onclick = out2.innerHTML = b2 * 2 * t2();

//task3

let button31 = document.querySelector('.b-3-1');
let button32 = document.querySelector('.b-3-2');
let out3 = document.querySelector('.out-3');
function t3(a, b) {
    return (a * b)
}
button31.onclick = out3.innerHTML = t3(6, 7);
button32.onclick = out3.innerHTML = t3(96, 3);

//task4 ne rabotaet


// function t4(a) {
//     let b = 2023;
//     return (b - a);
// }
// console.log(t4(1992))

// //task5 передача результата выполнения функции в переменную


function t5(a) {
    return a.length;
}
let resT5 = t5('dasha')
// console.log(resT5);


//task6 //  получилось

//https://learnjs.ru/lessons/math-random/

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
// }
// console.log(getRandomNumber)

// let a6 = 3;
// let b6 = 10;
// function getRandomNumber(a6, b6) {
//     return Math.floor(Math.random() * (b6 - a6 + 1)) + a6
// }
// console.log(getRandomNumber(a6, b6))


//task7, сделано но совершенно не изящно.

// let a7 = 0;
// let b7 = 255;

function t7(min, max) {

    function getRandomNumber() {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    let x = getRandomNumber();
    let y = getRandomNumber();
    let z = getRandomNumber();
    let res = `rgb(${x},${y},${z})`;
    let div7 = document.querySelector('.out-7');

    console.log(res)
    console.log(div7)
    div7.style = `background-color:${res}`
}
console.log(t7(0, 255))

//task8  не вышло естественно

// let a8 = " random "
// function t8(a8) {
//     return trim(a8);
// }
// console.log(t8(" random "))

//task9 получилось, удивительно

// function t9() {
//     let i = 6;
//     if (i % 2 == 0) {
//         return (true)
//     }
//     else {
//         return (false)
//     }
// }
// console.log(t9())

//task10
let a = 25;
let b = 41;
function t10(a, b) {

    if (a > b) {
        return (a);
    }
    else if (b > a) {
        return (b);
    }
    else {
        return (a);
    }
}
console.log(t10());













