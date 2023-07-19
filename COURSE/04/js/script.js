let button1 = document.querySelector('.b-1');
button1.onclick = function () {
    document.querySelector('.out-1').innerHTML = '1';
}    //task1

let input2 = document.querySelector('.i-2');
input2.onclick = function () {
    document.querySelector('.out-2').innerHTML = '2';
} //task2


let p3 = document.querySelector('.p-3');
p3.onclick = function () {
    document.querySelector('.out-3').innerHTML = '3';
} //task3

let button4 = document.querySelector('.b-4');
button4.onclick = function () {
    let myCheckBox = document.querySelector('#i-4');
    if (myCheckBox.checked) {
        document.querySelector('.out-4').innerHTML = 'true';
    }
    else {
        document.querySelector('.out-4').innerHTML = 'false';
    }
}   //task4

let button5 = document.querySelector('.b-5');
let input5 = document.querySelector('#five');
button5.onclick = function () {
    let myCheckBox = document.querySelector(input5.value);
    if (myCheckBox.checked) {
        document.querySelector('.out-5').innerHTML = (input5.value);
    }
    else {
        document.querySelector('.out-5').innerHTML = 'false';
    }
}   //task5!!!!!!!!!!! в 6 таске "обратите внимание.." -ощущение, что решение уже где то написано

let button6 = document.querySelector('.b-6');
let input6 = document.querySelector('#six')
button5.onclick = function () {
    document.querySelector(input6.value);
}   //task6!!!!!!!!!!!

let button7 = document.querySelector('.b-7');
let input7 = document.querySelector('#seven');
button7.onclick = function () {
    document.querySelector('.out-71').innerHTML = (input7.value);

    if (input7.length >= 6) {
        document.querySelector('.out-72').innerHTML = ('1');//!!!!!!!!!!!!!
    }
    else {
        document.querySelector('.out-72').innerHTML = ('0');
    }

}//task7!!!!!!!!!!!!!!


let button8 = document.querySelector('.b-8');
button8.onclick = function () {
    let out8 = document.querySelector('.out-8');
    out8.innerHTML = document.querySelector('.js72');
    out8.innerHTML = document.querySelector('.text8');
}//8 очень странный результат


let button9 = document.querySelector('.b-9');
button9.onclick = function () {
    let radioPoint = document.querySelector('.r-9');
    if (radioPoint.checked) {
        document.querySelector('.out-9').innerHTML = (radioPoint.value)
    }
    else {
        document.querySelector('.out-9').innerHTML = ('false')
    }
}

















