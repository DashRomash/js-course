let button1 = document.querySelector('.b-1');
let input1 = document.querySelector('.i-1');
button1.onclick = function () {
    if (input1.value == 4) {
        document.querySelector('.out-1').innerHTML = ('True');
    }
    else {
        document.querySelector('.out-1').innerHTML = ('False');
    } //  task 1
}


let button2 = document.querySelector('.b-2');
let a21 = 6;
let a22 = 8;
button2.onclick = function () {
    if (a21 > a22) {
        document.querySelector('.out-2').innerHTML = (a21);
    }
    else if (a22 > a21) {
        document.querySelector('.out-2').innerHTML = (a22);
    }
    else {
        console.log("фигня какая то");
    }
}   //  task 2


let button3 = document.querySelector('.b-3');
let input3_1 = document.querySelector('.i-3_1');
let input3_2 = document.querySelector('.i-3_2');
button3.onclick = function () {
    if (input3_1.value > input3_2.value) {
        document.querySelector('.out-3').innerHTML = (input3_1.value);
    }
    else if (nput3_2.value > input3_1.value) {
        document.querySelector('.out-3').innerHTML = (input3_2.value);
    }
    else {
        console.log("фигня какая то");
    }
}   //  task 3


let button4 = document.querySelector('.b-4');
let input4 = document.querySelector('.i-4');
button4.onclick = function () {
    if (input4.value >= 18) {
        document.querySelector('.out-4').innerHTML = ('1');
    }
    else if (input4.value < 18) {
        document.querySelector('.out-4').innerHTML = ('0');
    }
}   //  task 4

let button5 = document.querySelector('.b-5');
let input5 = document.querySelector('.i-5');
button5.onclick = function () {
    if (input5.value < 0) {
        document.querySelector('.out-5').innerHTML = ('m');
    }
    else if (input5.value == 0) {
        document.querySelector('.out-5').innerHTML = ('0');
    }
    else if (input5.value > 0) {
        document.querySelector('.out-5').innerHTML = ('1');
    }  //  task 5
}

let button6 = document.querySelector('.b-6');
let input6 = document.querySelector('.i-6');
button6.onclick = function () {
    if (input6.value % 2 == 0) {
        document.querySelector('.out-6').innerHTML = ('even');
    }
    else if (input6.value % 2 > 0) {
        document.querySelector('.out-6').innerHTML = ('odd');
    }
}   //  task 6

// let button7 = document.querySelector('.b-7');
//let input7_1 = document.querySelector('.i-7_1');
//let input7_2 = document.querySelector('.i-7_2');
//button7.onclick =function ()  {
//document.querySelector('.out-7').innerHTML = (input7_1.value ** input7_2.value);
//}    //  task 7!!!!!!!!!!!!!!!!!!

let button8 = document.querySelector('.b-8');
let select8 = document.querySelector('.s-8');
button8.onclick = function () {
    let a8 = select8.value;
    switch (a8) {
        case 1:
            document.querySelector('.out-8').innerHTML = ('one');
            break;
        case 2:
            document.querySelector('.out-8').innerHTML = ('two');
            break;
        case 3:
            document.querySelector('.out-8').innerHTML = ('three');
            break;
    }
}   //  task 8!!!!!!!!!!!!!!!!!!

let button9 = document.querySelector('.b-9');
let input9 = document.querySelector('.i-9');
button9.onclick = function () {
    if (input9.value >= 1 && input9.value <= 32) {
        document.querySelector('.out-9').innerHTML = ('1');
    }
    else if (input9.value >= 33 && input9.value <= 43) {
        document.querySelector('.out-9').innerHTML = ('2');
    }
    else if (input9.value >= 44 && input9.value <= 64) {
        document.querySelector('.out-9').innerHTML = ('3');
    }
    else {
        document.querySelector('.out-9').innerHTML = ('0');
    }
} // task 9

let button10 = document.querySelector('.b-10');
let select10 = document.querySelector('.s-10');
button10.onclick = function () {
    let a10 = select10.value;
    document.querySelector('.out-10').innerHTML = (a10);
}  // task 10

let select11 = document.querySelector('.s-11');
select11.onchange = function () {
    document.querySelector('.out-11').innerHTML = (select11.value);
}  // task 11

let button12 = document.querySelector('.b-12');
let input12 = document.querySelector('.i-120');
button12.onclick = function () {
    let a12 = input12.value;
    document.querySelector('.out-12').innerHTML = (a12.typeof);

}  // task 12!!!!

let button13 = document.querySelector('.b-13');
let input13 = document.querySelector('.i-130');
button13.onclick = function () {
    let a13 = input13.value;
    document.querySelector('.out-13').innerHTML = (a13.typeof);

}  // task 13!!!!!

let button14 = document.querySelector('.b-14');
let input14_1 = document.querySelector('.i-14_1');
let input14_2 = document.querySelector('.i-14_2');
let select14 = document.querySelector('.s-143');
button14.onclick = function () {
    if (select14.value == "+") {
        document.querySelector('.out-14').innerHTML = (+input14_1.value + +input14_2.value);
    }
    else if (select14.value == "-") {
        document.querySelector('.out-14').innerHTML = (input14_1.value - input14_2.value);
    }
    else if (select14.value == "*") {
        document.querySelector('.out-14').innerHTML = (input14_1.value * input14_2.value);
    }
    else if (select14.value == "/") {
        document.querySelector('.out-14').innerHTML = (input14_1.value / input14_2.value);
    }
}

let button15 = document.querySelector('.b-15');
let select15_1 = document.querySelector('.s-151');
let select15_2 = document.querySelector('.s-152');
let select15_3 = document.querySelector('.s-153');
button15.onclick = function () {
    if (select15_1.value == "1" && select15_2.value == "1" && select15_3.value == "&&") {
        document.querySelector('.out-15').innerHTML = ("1 и 1");
    }
    if (select15_1.value == "1" && select15_2.value == "1" && select15_3.value == "||") {
        document.querySelector('.out-15').innerHTML = ("1 или 1");
    }
    if (select15_1.value == "0" && select15_2.value == "1" && select15_3.value == "&&") {
        document.querySelector('.out-15').innerHTML = ("0 и 1");
    }
    if (select15_1.value == "0" && select15_2.value == "1" && select15_3.value == "||") {
        document.querySelector('.out-15').innerHTML = ("0 или 1");
    }
    if (select15_1.value == "0" && select15_2.value == "0" && select15_3.value == "&&") {
        document.querySelector('.out-15').innerHTML = ("0 и 0");
    }
    if (select15_1.value == "0" && select15_2.value == "0" && select15_3.value == "||") {
        document.querySelector('.out-15').innerHTML = ("0 или 0");
    }
}


































