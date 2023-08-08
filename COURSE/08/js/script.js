//TASK1

// let button1 = document.querySelector('.b-1');
// let out1 = document.querySelector('.out-1');
// let k = 1;
// function t1() {
//     while (k < 50) {

//         k++
//         out1.innerHTML += `${k}_`;

//     }
// }
// button1.onclick = t1();

//TASK2         почему то кнопка не привязывается к функции,а просто работает при обновлении стр.

// let button2 = document.querySelector('.b-2');
// let out2 = document.querySelector('.out-2');
// let k = 0;
// function t2() {
//     while (k < 46) {
//         k = k + 2;
//         // console.log(k);
//         out2.innerHTML += `${k}_`;
//     }
// }
// button2.onclick = t2();


//TASK 3

// let button3 = document.querySelector('.b-3');
// let out3 = document.querySelector('.out-3');
// let k = 25;
// function t3() {
//     while (k >= 7) {
//         // console.log(k);
//         out3.innerHTML += `${k}_`;
//         k--
//     }
// }
// button3.onclick = t3();


//TASK 4

// let button4 = document.querySelector('.b-4');
// let out4 = document.querySelector('.out-4');
// let k = 77;
// function t4() {
//     while (k >= 35) {
//         out4.innerHTML += `${k}_`;
//         k = k - 3;

//     }
// }
// button4.onclick = t4();


//TASK 5

// let button5 = document.querySelector('.b-5');
// let out5 = document.querySelector('.out-5');
// let k = 0;
// function t5() {
//     while (k <= 17) {
//         k++;
//         if (k % 2 == 1) {
//             out5.innerHTML += `${k}_*`;
//         }
//         else {
//             out5.innerHTML += `${k}_**`;
//         }
//     }
// }
// button5.onclick = t5();

//TASK 6

// let button6 = document.querySelector('.b-6');
// let out6 = document.querySelector('.out-6');
// let i6 = document.querySelector('.i-6');
// let k = i6.value;
// function t6() {
//     for (let i = 0; i < k; i++) {
//         out6.innerHTML += `******<br>`
//     }
// }
// button6.onclick = t6();


//TASK 7 работает , но не по кнопке, а по обновл. стр.

// let button7 = document.querySelector('.b-7');
// let out7 = document.querySelector('.out-7');
// let i7 = document.querySelector('.i-7');
// let k = i7.value;
// function t7() {
//     while (k >= 0) {
//         out7.innerHTML += `${k}`
//         k--
//     }
// }
// button7.onclick = t7();


//TASK 8

// let button8 = document.querySelector('.b-8');
// let out8 = document.querySelector('.out-8');
// let i81 = document.querySelector('.i-81');
// let i82 = document.querySelector('.i-82');
// function t8() {
//     let k = i81.value;
//     while (k <= i82.value) {
//         out8.innerHTML += `${k}_`
//         k++;
//     }
// }
// button8.onclick = t8;

//TASK 9  не работает цикл элс

// let button9 = document.querySelector('.b-9');
// let out9 = document.querySelector('.out-9');
// let i91 = document.querySelector('.i-91');
// let i92 = document.querySelector('.i-92');
// function t9() {
//     if (i91.value < i92.value) {
//         let k = i91.value;
//         while (k <= i92.value) {
//             out9.innerHTML += `${k}_`
//             k++;
//         }
//     }
//     else {
//         let k = i92.value;
//         while (k <= i91.value) {
//             out9.innerHTML += `${k}_`
//             k++;
//         }
//     }
// }
// button9.onclick = t9;

//TASK 10

// let button10 = document.querySelector('.b-10');
// let out10 = document.querySelector('.out-10');
// function t10() {
//     let k = 1950;
//     while (k < 1966) {
//         out10.innerHTML += `${k}_`
//         k = k + 2
//     }
// }
// button10.onclick = t10;

//TASK 11 :(

let button11 = document.querySelector('.b-11');
let divs11 = document.querySelector('.div-11');
let out11 = document.querySelector('.out-11');
let res = '';
function t11() {
    let k;
    while (k < divs11.length) {
        // console.log(divs11[i].innerHTML)
        res = res + divs11[i].innerHTML + "_";
    }
    out11.innerHTML = res;
}
button11.onclick = t11;