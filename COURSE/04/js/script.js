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
button5.onclick = function () {
    let myCheckBox = document.querySelector('#i-5');
    if (myCheckBox.checked) {
        document.querySelector('.out-5').innerHTML = ('#i-5'.value);  //????
    }
    else {
        document.querySelector('.out-5').innerHTML = 'false';
    }
}   //task5!!!!!!!!!!! в 6 таске "обратите внимание.." -ощущение, что решение уже где то написано

let button5 = document.querySelector('.b-5');
button5.onclick = function () {
    document.querySelector('#i-5')
}   //task6!!!!!!!!!!!


















