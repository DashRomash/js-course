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
    for (let i = 77; i >= 35; i = i + 3)
        document.querySelector('.out-4').innerHTML += i + "_";
}//task4 ломается

let button5 = document.querySelector('.b-5');
let o5 = ' ';
function t5() {
    for (let i = 1; i <= 17; i = i + 1)
        if (i % 2 == 1) {
            o5 += i + "_*";
        }
        else {
            o5 += i + "_**";
        }
}
button5.onclick = t5;
document.querySelector('.out-5').innerHTML = o5;
//task5 не рабатает

let button6 = document.querySelector('.b-6');
button6.onclick = function t6() {
    for (let i = 0; i < 4; i = i + 1) {
        document.querySelector('.out-6').innerHTML = "*****"; continue;
    }
}//task6 не правильно


let button7 = document.querySelector('.b-7');
let i7 = document.querySelector('.i-7');
function t7() {
    let a = [i7.value];
    //while (a > 0) {
    // document.querySelector('.out-7').innerHTML = a;
    //a--;
    //}


    //document.querySelector('.out-7').innerHTML = a + '_' + (a - 1);
    //let n = a - 1;
    //while (n > 0) {
    //document.querySelector('.out-7').innerHTML = a + '_' + (n);

    //}
    //a--; все не правильно
}
button7.onclick = t7;//task7 нифига не понимаю как сделать


let button8 = document.querySelector('.b-8');
button8.onclick = function t8() {
    let a = document.querySelector[('.i-81').value]
    let b = document.querySelector[('.i-81').value]
    for (i = 1; i < 100; i++) {
        document.querySelector('.out-8').innerHTML = a + '_' + i + '_' + b;
    }
}





















