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

//TASK7 цикл не работает

let button7 = document.querySelector('.b-7');
function t7() {
    for (i = 0; i < 3; i++) {
        document.querySelector('.out-7').classList.add('three')
    }
}
button7.onclick = t7;







