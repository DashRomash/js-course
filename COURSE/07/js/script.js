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
// let button4 = document.querySelector('.b-4');
// let i4 = document.querySelector('.i-4');
// let a = +i4.value;
// button4.onclick = function t4(a, b) {
//     let b = 2023;
//     return (b - a);
// }
// out4.innerHTML = t4();

//task5
let button5 = document.querySelector('.b-5');
let i5 = document.querySelector('.i-5');
let out5 = document.querySelector('.out-5');
function t5(a,) {
    let a = i5.value;
    out5.innerHTML = a.length;
}
button5.onclick = t5(a);














