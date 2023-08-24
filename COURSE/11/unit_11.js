//TASK1
let button1 = document.querySelector('.b-1');
let d1 = [33, 'best', 66, 'best'];
let in1 = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');
function f1() {
    d1.push(in1.value);
    //console.log(d1);
    showArr(d1, out1)
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button1.onclick = f1;

//TASK2
let button2 = document.querySelector('.b-2');
let out2 = document.querySelector('.out-2');
function f2() {
    d1.pop();
    showArr(d1, out2)
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button2.onclick = function () {
    f2()
}

//TASK3
let button3 = document.querySelector('.b-3');
let out3 = document.querySelector('.out-3');
function f3() {
    d1.shift();
    showArr(d1, out3);
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button3.onclick = function () {
    f3()
}

//TASK4
let button4 = document.querySelector('.b-4');
let in4 = document.querySelector('.i-4');
let out4 = document.querySelector('.out-4');
function f4() {
    d1.push(in4.value);
    showArr(d1, out4);
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button4.onclick = function () {
    f4()
}
//TASK5
let button5 = document.querySelector('.b-5');
let in5 = document.querySelector('.i-5');
let out5 = document.querySelector('.out-5');
function f5() {
    d1.unshift(in5.value);
    showArr(d1, out5);
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button5.onclick = function () {
    f5()
}

//TASK6
let button6 = document.querySelector('.b-6');
let in6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6');
let d6 = ['test', 5, 12];
function f6() {
    let a = in6.value;
    d6[d6.length - 1] = a;
    showArr(d6, out6);
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ')
}
button6.onclick = function () {
    f6()
}

//TASK7
let button7 = document.querySelector('.b-7');
let out7 = document.querySelector('.out-7');
let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
function f7() {
    d7.length = d7.length - 1;
    showArr(d7, out7);
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ')
}
button7.onclick = function () {
    f7()
}

//TASK8 это мой вариант и он не работаетю.ЧАТ. сама бы не догадалась как сдвинуть
let button8 = document.querySelector('.b-8');
let in8 = document.querySelector('.i-8');
let out8 = document.querySelector('.out-8');
let d8 = [2, '4', 12, 67, 'hello'];
function f8() {
    let a = in8.value;
    //     d8.length = d8.length + 1;
    //     d8[0] = a;
    for (let i = d8.length - 1; i >= 0; i--) {
        d8[i + 1] = d8[i];
    }
    d8[0] = a

    showArr(d8, out8);
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button8.onclick = function () {
    f8()
}

//TASK9 все получилось с тоностью да наоборот, чат не видит ошибки
let button9 = document.querySelector('.b-9');
let out9 = document.querySelector('.out-9');
let d9 = [100, 200, 300, 400, 700, 121];
function f9() {
    //     for (let i = d9.length - 1; i >= 0; i--) {
    //         d9[i + 1] = d9[i];
    //     }
    //     // d9.length = d9.length - 1;
    //     showArr(d9, out9);
    // }
    d9.splice(0, 1); // ток так, ну а какой смысл усложнять и перемудривать?
    showArr(d9, out9);
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button9.onclick = function () {
    f9()
}

//TASK10
let button10 = document.querySelector('.b-10');
let out10 = document.querySelector('.out-10');
let d10 = [3, 14, 15, 92, 6];
function f10() {
    d10.reverse();
    showArr(d10, out10);
}
function showArr(arr, outputElement) {
    outputElement.textContent = arr.join(', ');
}
button10.onclick = function () {
    f10()
}

//TASK11 моя попытка
// let button11 = document.querySelector('.b-11');
// let in11 = document.querySelector('.i-11');
// let out11 = document.querySelector('.out-11');
// let d11 = [2, 3, 4, 5, 6, 7];
// function f11() {
//     let a = +in11.value;
//     d11.indexOf(a);
//     for (let i = 0; i < d11.length; i++) {
//         if (d11.indexOf(a) = true) {
//             out11.textContent = i;
//         }
//         else {
//             out11.textContent = 'false';
//         }
//     }

// }
// button11.onclick = function () {
//     f11()
// }
//TASK11 чат лихое условие проверки, чтобы понять принадлежит ли элемент к массиву, сравниваем его индекс с несуществующим
let button11 = document.querySelector('.b-11');
let in11 = document.querySelector('.i-11');
let out11 = document.querySelector('.out-11');
let d11 = [2, 3, 4, 5, 6, 7];
function f11() {
    let a = +in11.value;
    let index = d11.indexOf(a);
    if (index !== -1) {
        out11.innerHTML = index;
    }
    else {
        out11.innerHTML = 'false';
    }

}
button11.onclick = function () {
    f11()
}

//TASK12
let button12 = document.querySelector('.b-12');
let in12 = document.querySelector('.i-12');
let out12 = document.querySelector('.out-12');
let d12 = [6, 62, 60, 70, 1, 5];
function f12() {
    let a = in12.value;
    let foundIndex = -1;// предлжил чат
    for (let i = 0; i < d12.length; i++) {
        if (d12[i] == a) {
            foundIndex = i;
            //out12.textContent = `${i}`;
            break;
        }
    }
    out12.textContent = foundIndex !== -1 ? foundIndex : '-1'; // предлжил чатб мне понравилосьб лаконичненько

}
button12.onclick = function () {
    f12()
}