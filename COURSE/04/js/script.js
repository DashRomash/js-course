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
}//9

let button10 = document.querySelector('.b-10');
button10.onclick = function () {
    let colorBox = document.querySelector('.c-10');
    //document.querySelector('.out-10').innerHTML = (colorBox.value)
    document.querySelector('.out-10').style.backgroundColor = (colorBox.value)
}//10


let button11 = document.querySelector('.b-11');
button11.onclick = function () {
    let colorPlace = document.querySelector('.c-111');
    document.querySelector('.i-112').innerHTML = (colorPlace.value)
}//11!!!!!! не вышло не пойму почему


let button12 = document.querySelector('.b-12');
button12.onclick = function () {
    let dataBox = document.querySelector('.i-12');
    document.querySelector('.out-12').innerHTML = (dataBox.value)
}//12


document.querySelector('.i-13').oninput = function () {
    let lonelyRanger = document.querySelector('.i-13')
    document.querySelector('.out-13').innerHTML = (lonelyRanger.value)
}//13

let button14 = document.querySelector('.b-14');
button14.onclick = function () {
    let textPlace = document.querySelector('.t-14')
    document.querySelector('.out-14').innerHTML = (textPlace.value)
}//14

let button15 = document.querySelector('.b-15');
button15.onclick = function () {
    let c = document.querySelector('.i-15')
    document.querySelector('.out-15').innerHTML = (c.value)
    document.querySelector('.t-15').innerHTML = (c.value)
}//15

let button16 = document.querySelector('.b-16');
button16.onclick = function () {
    let d = document.querySelector('.s-16')
    document.querySelector('.out-16').innerHTML = (d.value)
}//16

document.querySelector('.s-17').oninput = function () {
    let s = document.querySelector('.s-17')
    document.querySelector('.out-17').innerHTML = (s.value)
}//17

document.querySelector('.s-18').oninput = function () {
    let t = document.querySelector('.s-18')
    document.querySelector('.i-18').value = (t.value)
}//18

let button19 = document.querySelector('.b-19');
button19.onclick = function () {
    let g = document.querySelector('.out-19')
    document.querySelector('.i-19').innerHTML = (g.value)
}//19!!!!!!!!!! ясно одно: что либо встроить в инпут надо как то особенно.у дива ведь нет валью


document.querySelector('.s-201').oninput = function () {
    let m = document.querySelector('.s-201');
    document.querySelector('.s-202').value = (m.value)
}//20









