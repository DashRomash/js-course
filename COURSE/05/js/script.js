let button1 = document.querySelector('.b-1');
function t1() {
    for (let i = 0; i <= 16; i++)
        document.querySelector('.out-1').innerHTML += i + "_";
}
button1.onclick = t1;//task1

let button2 = document.querySelector('.b-2');
button2.onclick = function t2() {
    for (let i = 12; i <= 38; i + 2)
        document.querySelector('.out-2').innerHTML += i + '_';
}






















