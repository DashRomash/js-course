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
function t5() {
    for (let i = 1; i <= 17; i = i + 1)
        document.querySelector('.out-5').innerHTML += i + "_*";
}
button5.onclick = t5;
//task5





















