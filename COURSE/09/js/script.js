//TASK1

// let out1 = document.querySelector('.out-1');
// let button1 = document.querySelector('.b-1');
// function t1() {
//     out1.style.width = '200px';
//     out1.style.height = '90px';
// }
// button1.onclick = t1;


//TASK2

// let out2 = document.querySelector('.out-2');
// let button2 = document.querySelector('.b-2');
// function t2() {
//     out2.style.backgroundColor = "orange"
// }
// button2.onclick = t2;


//TASK3 n

// let out3 = document.querySelector('.out-3');
// let button3 = document.querySelector('.b-3');
// function t3() {
//     out3.removeAttribute('style');
//     // style.backgroundColor = 'orange'
// }
// button3.onclick = t3;

//TASK4

let out4 = document.querySelector('.out-4');
let toggle = document.querySelector('.TOGGLE');
toggle.onclick = function t4() {
    out4.classList.toggle('three');
}

//TASK5

let out5 = document.querySelector('.out-5');
let button5 = document.querySelector('.b-5');
button5.onclick = function t5() {
    if (out4.classList.toggle('three')) {
        out5.innerHTML = "true"
    }
    else {
        out5.innerHTML = "false"
    }
}

//TASK6 не получилось

let out6 = document.querySelector('.out-6');
let button6 = document.querySelector('.b-6');
button6.onclick = function t6() {
    let a = document.querySelector('.p-6').length;
    out6.innerHTML += a;
}

//TASK7 

let button7 = document.querySelector('.b-7');
let out7 = document.querySelectorAll('.out-7');
function t7() {
    let k = 0;
    while (k < out7.length) {
        out7[k].classList.add('three');
        // console.log(out7[k]);
        k++;
    }
}
button7.onclick = t7;


//TASK8 

let button8 = document.querySelector('.b-8');
let out8 = document.querySelectorAll('.out-8');
function t8() {
    for (i = 0; i < 3; i++) {
        out8[i].classList.toggle('three');
    }
}
button8.onclick = t8;


//TASK9 не догадалась вынести цикл за функцию

let out9 = document.querySelectorAll('.out-9');
function t9() {
    this.classList.add('three');
}
for (i = 0; i < out9.length; i++) {
    out9[i].onclick = t9;
}

//TASK9 

let out10 = document.querySelectorAll('.out-10');
function t10() {
    this.classList.toggle('three');
}
for (i = 0; i < out10.length; i++) {
    out10[i].onclick = t10;
}



// //TASK10

// let out11 = document.querySelector('.out-9');