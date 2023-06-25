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

let button8 = document.querySelector('b-8');
let input8 = document.querySelector('i-8');
let e8 = document.querySelector('out-8');

button8.onclick = function () {
    console.log('молодец');
    console.log(input8.value);
    let n = input8.value;
    console.log(n);  //  task 8!!!!!!!!!!!!!!!!!!!!!! 
}

let button9 = document.querySelector('b-9');
let input9 = document.querySelector('i-9');
let e9 = document.querySelector('out-9');






