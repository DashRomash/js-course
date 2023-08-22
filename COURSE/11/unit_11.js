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