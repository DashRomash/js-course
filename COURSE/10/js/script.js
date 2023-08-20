//TASK1
let out1 = document.querySelector('.out-1');
let button1 = document.querySelector('.b-1');
let ar1 = ['privet', 3, 5, 7, false, 'hooray', true, true, 2]
button1.onclick = function t1() {
    out1.innerHTML = ar1;
}

//TASK2 не работает почему то
let out2 = "";
let button2 = document.querySelector('.b-2');
let ar2 = ['privet', 3, 5, 7, false, 'hooray', true, true, 2];
button2.onclick = function t2() {
    out2 = '';
    for (let i = 0; i < ar2.length; i++) {
        out2 += ar2[i] + " ";
    }
}
document.querySelector('.out-2').innerHTML = out2;




















