let button1 = document.querySelector('.b-1');
function t1() {
    for (let i = 0; i <= 16; i++)
        document.querySelector('.out-1').innerHTML += i + "_";
}
button1.onclick = t1();//task1

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
    for (let i = 77; i >= 35; i = i - 3) {
        console.log(i + "_");
        document.querySelector('.out-4').innerHTML += i + "_";
    }
}//task4 

// let button5 = document.querySelector('.b-5');
// let o5 = ' ';
// function t5() {
//     for (let i = 1; i <= 17; i = i + 1) {
//         console.log(i);
//         if (i % 2 == 1) {
//             o5 += i + "_*";
//             console.log(i);
//         }
//         else {
//             o5 += i + "_**";
//         }
//     }
// }
// console.log('test', o5);
// button5.onclick = t5();
// document.querySelector('.out-5').innerHTML = o5;
// task5

let button6 = document.querySelector('.b-6');
button6.onclick = function t6() {
    for (let i = 0; i < 3; i++) {
        document.querySelector('.out-6').innerHTML += "*****" + "<br>"
    }
}//task6 не правильно


let button7 = document.querySelector('.b-7');
let i7 = document.querySelector('.i-7');
button7.onclick = function t7() {

    for (let i = [i7.value]; i >= 0; i = i - 1) {
        console.log(i)
        document.querySelector('.out-7').innerHTML += i + '_'
    }
}
// task7


let button8 = document.querySelector('.b-8');
let i81 = document.querySelector('.i-81');
let i82 = document.querySelector('.i-82');
button8.onclick = function t8() {
    for (let i = [i81.value]; i <= [i82.value]; i++) {
        document.querySelector('.out-8').innerHTML += i + '_'
    }
} //task8 

let button9 = document.querySelector('.b-9');
let i91 = document.querySelector('.i-91');
let i92 = document.querySelector('.i-92');
button9.onclick = function t9() {
    console.log('i91', Number(i91.value))
    console.log('i92', Number(i92.value))
    if (i91.value < i92.value) {

        for (let i = i91.value; i <= i92.value; i++) {
            console.log(i)
            document.querySelector('.out-9').innerHTML += i + '_';
        }
    }
    else {
        for (let i = i92.value; i <= i91.value; i++) {
            console.log(i)
            document.querySelector('.out-9').innerHTML += i + '_';
        }
    }
} //task9 

let button10 = document.querySelector('.b-10');
button10.onclick = function t10() {
    for (let i = 1950; i <= 1970; i = i + 2) {
        document.querySelector('.out-10').innerHTML += i + '_';
    }
}//task10 
//task11  ошибка 

let button11 = document.querySelector('.b-11');
button11.onclick = function t11() {
    let divs11 = document.querySelectorAll('.div-11');
    console.log(divs11);
    let res = "";
    for (let i = 0; i < divs11.length; i = i + 1) {
        // console.log(divs11[i].innerHTML)
        // res += divs11[i].innerHTML;
        res = res + divs11[i].innerHTML + "_";
        // divs11[i].innerHTML;
    }
    console.log(res);
    document.querySelector('.out-11').innerHTML = res;
}

// let button12 = document.querySelector('.b-11');
// button12.onclick = function t12() {
//     let elem = document.querySelector('.div-12');
//     for (let i = 0; i < divs12.length; i = i + 1) {
//         elem[i].innerHTML;
//     }
//     elem[i].style.background = "orange";
// }//task12  ошибка 

let in13 = document.querySelectorAll('.i-13');
function t13() {
    console.log(in13);
    for (i = 0; i < in13.length; i++) {
        // console.log(in13[i])
        in13[i].value = i + 1;
    }
}
t13()

let button14 = document.querySelector('.b-14');
button14.onclick = function t14() {
    let elem = document.querySelector('i-14');
    for (i = 0; i < in14.length; i = i + 1) {
        elem[i].innerHTML;
    }
    document.querySelector('.out-14').innerHTML += elem[i].cheked.value;
}





let button15 = document.querySelector('.b-15');

button15.onclick = function t15() {
    let a = 0;
    let res = "";
    for (let i = 10; i >= 0; i--) {
        res += i + "_"
        res += a + "_"
        a++;
    }
    console.log("res", res)
}//task15





















