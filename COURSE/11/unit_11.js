//TASK1
let button1 = document.querySelector('.b-1');
let d1 = [33, 'best', 66, 'best'];
let in1 = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');
function f1() {
    d1.push(in1.value);
    //console.log(d1);
    showArr(d1, out1)
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button1.onclick = f1;

//TASK2
let button2 = document.querySelector('.b-2');
let out2 = document.querySelector('.out-2');
function f2() {
    d1.pop();
    showArr(d1, out2)
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button2.onclick = function () {
    f2()
}

//TASK3
let button3 = document.querySelector('.b-3');
let out3 = document.querySelector('.out-3');
function f3() {
    d1.shift();
    showArr(d1, out3);
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button3.onclick = function () {
    f3()
}

//TASK4
let button4 = document.querySelector('.b-4');
let in4 = document.querySelector('.i-4');
let out4 = document.querySelector('.out-4');
function f4() {
    d1.push(in4.value);
    showArr(d1, out4);
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button4.onclick = function () {
    f4()
}
//TASK5
let button5 = document.querySelector('.b-5');
let in5 = document.querySelector('.i-5');
let out5 = document.querySelector('.out-5');
function f5() {
    d1.unshift(in5.value);
    showArr(d1, out5);
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button5.onclick = function () {
    f5()
}

//TASK6
let button6 = document.querySelector('.b-6');
let in6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6');
let d6 = ['test', 5, 12];
function f6() {
    let a = in6.value;
    d6[d6.length - 1] = a;
    showArr(d6, out6);
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ')
}
button6.onclick = function () {
    f6()
}

//TASK7
let button7 = document.querySelector('.b-7');
let in7 = document.querySelector('.i-7');
let out7 = document.querySelector('.out-7');
