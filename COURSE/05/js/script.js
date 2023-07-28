let button1 = document.querySelector('.b-1');
function t1() {
    for (let i = 0; i <= 16; i++)
        document.querySelector('.out-1').innerHTML += i + "_";
}
button1.onclick = t1;//task1

let button2 = document.querySelector('.b-2');
button2.onclick = function t2() {
    for (let i = 12; i <= 38; i = i + 2)
        document.querySelector('.out-2').innerHTML += i + '_';
} //task2

let button3 = document.querySelector('.b-3');
button3.onclick = function t3() {
    for (let i = 25; i >= 7; i--)
        document.querySelector('.out-3').innerHTML += i + "_";
}//task3

let button4 = document.querySelector('.b-4');
button4.onclick = function t4() {
    for (let i = 77; i >= 35; i = i - 3) {
        console.log(i + "_");
        document.querySelector('.out-4').innerHTML += i + "_";
    }
}//task4 

// let button5 = document.querySelector('.b-5');
// let o5 = ' ';
// function t5() {
//     for (let i = 1; i <= 17; i = i + 1) {
//         console.log(i);
//         if (i % 2 == 1) {
//             o5 += i + "_*";
//             console.log(i);
//         }
//         else {
//             o5 += i + "_**";
//         }
//     }
// }
// console.log('test', o5);
// button5.onclick = t5();
// document.querySelector('.out-5').innerHTML = o5;
//task5 

let button6 = document.querySelector('.b-6');
button6.onclick = function t6() {
    for (let i = 0; i < 3; i++) {
        document.querySelector('.out-6').innerHTML = "*****" + "<br>"
    }
}//task6 не правильно


// let button7 = document.querySelector('.b-7');
// let i7 = document.querySelector('.i-7');
// button7.onclick = function t7() {
//     while ([i7.value] >= 0) {
//         [i7.value] = [i7.value] - 1;
//         document.querySelector('.out-7').innerHTML = [i7.value] + '_';
//     }
// }
//task7 huy


// let button8 = document.querySelector('.b-8');
// let i81 = document.querySelector('.i-81');
// let i82 = document.querySelector('.i-82');
// let a = [i81.value];
// let b = [i82.value];
// console.log(a, b);
// button8.onclick = function t8() {
//     for (let i; a < i > b; i++) {
//         console.log(a + '_' + i + '_' + b);
//         // document.querySelector('.out-8').innerHTML = a + '_' + i + '_' + b;
//     }
// } task8 huy

let button10 = document.querySelector('.b-10');
button10.onclick = function t10() {
    for (let i = 1950; i <= 1970; i = i + 2) {
        document.querySelector('.out-10').innerHTML += i + '_';
    }
}//task10 

let button15 = document.querySelector('.b-15');
button15.onclick = function t15() {
    for (let i; )

}//task15





















