let a = 7;
let b = 9;
console.log(a * b);  //  task 1

let c = 7;
let d = 9;
let q = document.querySelector('.out-2').innerHTML = (c / d);   //  task 2

let e = 3;
let f = 5;
let z = document.querySelector('.out-3').innerHTML = (e + f);   //  task 3

let e1 = '3';
let f1 = 5;
let v = document.querySelector('.out-4').innerHTML = (e1 + f1);   //  task 4 : 3-как строка.

let e2 = 3;
let f2 = 0;
let w = document.querySelector('.out-5').innerHTML = (e2 / f2);   //  task 5 

let e3 = 3;
let f3 = 'hello';
let y = document.querySelector('.out-6').innerHTML = (e3 + f3);   //  task 6  цифры со словами смешиваются в строки


let e4 = 3;
let f4 = 'hello';
let x = document.querySelector('.out-7').innerHTML = (e4 * f4);   //  task 7 т.е. складывать числа со словами можно в строки,а умножать числа на слова нельзя,будут не числа

let button8 = document.querySelector('.b-8');
let input8 = document.querySelector('.i-8');

button8.onclick = function () {
    console.log('молодец')
    let e8 = document.querySelector('.out-8').innerHTML = (input8.value)
    input8.value = ""

}        //  task 8


let button9 = document.querySelector('.b-9');
let input9 = document.querySelector('.i-9');

button9.onclick = function () {
    console.log('молодец')
    document.querySelector('.out-9').innerHTML = (input9.value)
    input9.value = ""
}   //  task 9



let button10 = document.querySelector('.b-10');
let input10 = document.querySelector('.i-10');
button10.onclick = function () {
    document.querySelector('.out-10').innerHTML = (input10.value * 20)
}  //  task 10????????????????????????????????????????


let button11 = document.querySelector('.b-11');
let input11 = document.querySelector('.i-11');
button11.onclick = function () {
    document.querySelector('.out-11').innerHTML = (input11.value + 55)
}    //  task 11


let button12 = document.querySelector('.b-12');
let input12_1 = document.querySelector('.i12-1');
let input12_2 = document.querySelector('.i12-2');
button12.onclick = function () {
    document.querySelector('.out-12').innerHTML = ('Hello' + ' ' + input12_1.value + ' ' + input12_2.value)
}  //  task 12


let button13 = document.querySelector('.b-13');
let input13_1 = document.querySelector('.i13-1');
let input13_2 = document.querySelector('.i13-2');
let a13 = input13_1.value;
let b13 = input13_2.value;
button13.onclick = function () {
    document.querySelector('.out-13').innerHTML = (+input13_1.value + +input13_2.value)
}  //  task 13


let button14 = document.querySelector('.b-14');
let input14 = document.querySelector('.i-14');
button14.onclick = function () {
    document.querySelector('.out-14').innerHTML = (input14.value = 'Go')
    input14.value = ''
}   //  task 14

let button15 = document.querySelector('.b-15');
let input15 = document.querySelector('.i-15');
button15.onclick = function () {
    input15.innerHTML = (style.border = "4px solid red")

}    //  task 14!!!!!!!!!!!!!!!!!!!!!!!!!!!















