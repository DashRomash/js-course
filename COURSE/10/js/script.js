//TASK1
let out1 = document.querySelector('.out-1');
let button1 = document.querySelector('.b-1');
let ar1 = ['privet', 3, 5, 7, false, 'hooray', true, true, 2]
button1.onclick = function t1() {
    out1.innerHTML = ar1;
}

//TASK2 
let out2 = "";
let button2 = document.querySelector('.b-2');
let ar2 = ['privet', 3, 5, 7, false, 'hooray', true, true, 2];
button2.onclick = function t2() {
    out2 = '';
    for (let i = 0; i < ar2.length; i++) {
        out2 += ar2[i] + " ";
    }
    document.querySelector('.out-2').innerHTML = out2;
}

//TASK3
let out3 = document.querySelector('.out-3');
let button3 = document.querySelector('.b-3');
let ar3 = ['privet', 3, 5, 7, false, 'hooray', true, true, 2];
button3.onclick = function t3() {
    out3.innerHTML = ar3.length;
}

//TASK4
let out4 = document.querySelector('.out-4');
let button4 = document.querySelector('.b-4');
let ar4 = ['privet', 3, 5, 7, false, 'hooray', true, true, 2];
button4.onclick = function t4() {
    out4.innerHTML = ar4[0] + ' ' + ar4[3] + ' ' + ar4[8];
}

//TASK5
let out5 = document.querySelector('.out-5');
let button5 = document.querySelector('.b-5');
let ar5 = [1, 3, 5, 7, 32, 17, 21, 26, 2];
button5.onclick = function t5() {
    let sum = 0;
    sum = sum + ar5[0] + ar5[2] + ar5[3];
    out5.innerHTML = sum;
}

//TASK6
let out6 = '';
let button6 = document.querySelector('.b-6');
let ar6 = ['Даша', 'Водолей', 17, 2];
button6.onclick = function t6() {
    for (i = 0; i < ar6.length; i++) {
        out6 += ar6[i] + ' ';
    }
    document.querySelector('.out-6').innerHTML = out6;
}


//TASK7
let out7 = '';
let button7 = document.querySelector('.b-7');
let ar7 = ['Даша', 'Водолей', 17, 2, 5, 5];
button7.onclick = function t7() {
    ar7[5] = 'italy';
    ar7[6] = 'turkey';
    ar7[7] = 'vietnam';
    for (let i = 0; i < ar7.length; i++) {
        out7 += ar7[i] + ' ';
    }
    document.querySelector('.out-7').innerHTML = out7;
}

//TASK8

let button8 = document.querySelector('.b-8');
let ar8 = [1, 3, 5, 7, 32, 17, 21, 26, 2];
button8.onclick = function t8() {
    ar8[3] = 3.14;
    ar8[4] = 17;
    ar8[6] = 5;
    let out8 = '';
    for (let i = 0; i < ar8.length; i++) {
        out8 += ar8[i];
        if (i !== ar8.length - 1) {
            out8 += '-';
        }
    }
    document.querySelector('.out-8').innerHTML = out8;
    document.querySelector('.out-8-1').innerHTML = ar8.length
}

//TASK9
let button9 = document.querySelector('.b-9');
let ar9 = [1, 3, 5, 7, 32, 17, 21, 26, 2];
let out9 = document.querySelector('.out-9');
console.log(ar9.length)
button9.onclick = function t9() {
    out9.innerHTML = ar9[8];
}

//TASK10
let button10 = document.querySelector('.b-10');
let ar10 = [100, 1, 300, 400, 700, 2];
let out10 = document.querySelector('.out-10');
let sum10 = 0;
button10.onclick = function t10() {
    sum10 = sum10 + ar10[1] + ar10[ar10.length - 1];
    out10.innerHTML = sum10;
}


//TASK11
let button11 = document.querySelector('.b-11');
let ar11 = [2, 3, 4, 5, 6, 7];
let out11 = document.querySelector('.out-11');
button11.onclick = function t11() {
    let a11 = ar11[2];
    ar11[2] = ar11[4];
    console.log(ar11);
    ar11[4] = a11;

    out11.innerHTML = ar11;
}

//TASK12
let button12 = document.querySelector('.b-12');
let ar12 = ['test', 'west', 'list', 'class', 'best'];
let out12 = document.querySelector('.out-12');
button12.onclick = function t12() {
    let a12 = ar12[0];
    ar12[0] = ar12[ar12.length - 1];
    ar12[ar12.length - 1] = a12;
    out12.innerHTML = ar12;
}

//TASK13
let button13 = document.querySelector('.b-13');
let ar13 = ['test', 'west', 'list', 'class', 'best'];
let out13 = '';
button13.onclick = function t13() {
    for (let i = 0; i < ar13.length; i++) {
        out13 += `${i} ${ar13[i]}`
    }
    document.querySelector('.out-13').innerHTML = out13;
}

//TASK14 мое решение невероятно тупое,чат предлагает супер простое 
//и здравое решение
// let button14 = document.querySelector('.b-14');
// let ar14 = [1, 2, 3, 'hello', 66];
// let out14 = document.querySelector('.out-14');
// button14.onclick = function t14() {
//     let a14 = ar14[0];
//     let b14 = ar14[1];
//     let c14 = ar14[3];
//     let d14 = ar14[4];
//     ar14[0] = d14;
//     ar14[1] = c14;
//     ar14[3] = b14;
//     ar14[4] = a14;
//     out14.innerHTML = ar14;
// }
let button14 = document.querySelector('.b-14');
let ar14 = [1, 2, 3, 'hello', 66];
let out14 = '';
button14.onclick = function t14() {
    for (let i = ar14.length - 1; i >= 0; i--) {
        out14 += ar14[i] + ' ';
    }
    document.querySelector('.out-14').innerHTML = out14;
}

//TASK15
let button15 = document.querySelector('.b-15');
let out15 = '';
let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
function t15() {
    for (let i = 0; i < ar15.length; i++) {
        if (ar15[i] > 0) {
            out15 += ar15[i] + ' ';
        }
    }
    document.querySelector('.out-15').innerHTML = out15;
}
button15.onclick = t15;

//TASK16 удивительно, но код сработал, правда результат с запятыми
let button16 = document.querySelector('.b-16');
let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];
let out16even = document.querySelector('.out-16-even');
let out16odd = document.querySelector('.out-16-odd');
// button16.onclick = function t16() {
//     for (let i = 0; i < ar16.length; i++) {
//         if (ar16[i] % 2 == 0) {
//             ar16_even[i] = ar16[i];
//         }
//         else {
//             ar16_odd[i] = ar16[i];
//         }
//     }
//     out16even.innerHTML = ar16_even;
//     out16odd.innerHTML = ar16_odd;
// }
//TASK16 чата; так канешно же красивее
button16.onclick = function t16() {
    for (let i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2 === 0) {
            ar16_even.push(ar16[i]);
        } else {
            ar16_odd.push(ar16[i]);
        }
    }
    out16even.textContent = ar16_even.join(' ');
    out16odd.textContent = ar16_odd.join(' ');
}

//TASK17
let button17 = document.querySelector('.b-17');
let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let out17 = document.querySelector('.out-17');
let s17 = [];
button17.onclick = function t17() {
    for (let i = 0; i < ar17.length; i++) {
        if (ar17[i] > 3) {
            s17.push(ar17[i]);
        }
    }
    out17.innerHTML = s17.length;
}
//TASK18
let button18 = document.querySelector('.b-18');
let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
let out18 = document.querySelector('.out-18');
let max = '';
button18.onclick = function t18() {
    for (let i = 0; i < ar18.length; i++) {
        max = ar18[0];
        if (ar18[i] > max) {
            max = ar18[i];
        }
    }
    out18.innerHTML = max;
}

//TASK19  не работает, и чат как то всрато обьясняет, не про то
let button19 = document.querySelector('.b-19');
let ar19 = [15, 424, 313, 78, 241, 4, 45, 67]
let out19 = document.querySelector('.out-19');
let min = '';
button19.onclick = function t19() {
    for (let i = 0; i < ar19.length; i++) {
        min = ar19[0];
        if (ar19[i] < min) {
            min = i;
        }
    }
    out19.innerHTML = min;
}

//TASK20
let button20 = document.querySelector('.b-20');
let ar20 = [4, 5, 6, 7, 8, 8, 10];
let out20 = document.querySelector('.out-20');
let sum = 0;
button20.onclick = function t20() {
    for (let i = 0; i < ar20.length; i++) {
        sum = sum + ar20[i];
    }
    out20.innerHTML = sum;
}