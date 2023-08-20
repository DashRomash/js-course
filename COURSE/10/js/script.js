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


















