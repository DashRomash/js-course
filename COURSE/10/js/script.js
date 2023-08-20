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





