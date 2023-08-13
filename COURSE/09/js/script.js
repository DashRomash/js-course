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

//TASK10 

let out10 = document.querySelectorAll('.out-10');
function t10() {
    this.classList.toggle('three');
}
for (i = 0; i < out10.length; i++) {
    out10[i].onclick = t10;
}

// //TASK11 получивси!!!

let out11 = document.querySelector('.out-11');
let button11 = document.querySelector('.b-11');
function f11() {
    let div = document.createElement('div');
    div.textContent = '25';
    out11.append(div);
}
button11.onclick = f11;

// //TASK12 класс не присвоилси как будто бы
let button12 = document.querySelector('.b-12');
let out12 = document.querySelector('.out-12');
function f12() {
    let div = document.createElement('div');
    div.textContent = '12';
    div.classList.add = ('twelve');
    out12.append(div);
}
button12.onclick = f12;

//TASK13

let button13 = document.querySelector('.b-13');
let out13 = document.querySelector('.out-13');
function f13() {
    let div = document.createElement('div');
    div.textContent = 'pushMe';
    div.classList.add = ('three');
    div.onclick = function f13_1() {
        console.log('Molodec');
    }
    out13.append(div);
}
button13.onclick = f13;

//TASK14

let button14 = document.querySelector('.b-14');
let out14 = document.querySelector('.out-14');
function f14() {
    let div = document.createElement('div');
    div.textContent = '14';
    div.classList.add = ('three');
    out14.append(div);
}
button14.onclick = f14;

//TASK15

let button15 = document.querySelector('.b-15');
let out15 = document.querySelector('.out-15');
function f15() {
    let div = document.createElement('div');
    div.textContent = '15';
    div.classList.add = ('three');
    out15.before(div);
}
button15.onclick = f15;

//TASK16

let button16 = document.querySelector('.b-16');
let out16 = document.querySelector('.out-16');
function f16() {
    let div = document.createElement('div');
    div.textContent = '16';
    div.classList.add = ('three');
    out16.after(div);
}
button16.onclick = f16;

//TASK17

let button17 = document.querySelector('.b-17');
let out17 = document.querySelector('.out-17');
function f17() {
    let div = document.createElement('div');
    div.textContent = '17';
    div.classList.add = ('three');
    out17.replaceWith(div);
}
button17.onclick = f17;

//TASK18

let button18 = document.querySelector('.b-18');
let out18 = document.querySelector('.out-18');
let p18 = document.querySelector('.p-18');
function f18() {
    let a = p18.getAttribute('data');
    out18.innerHTML = a;
}
button18.onclick = f18;
