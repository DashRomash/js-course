
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */
document.querySelector('.div-1').addEventListener('touchstart', Firsttouch);
function Firsttouch(event) {
    document.querySelector('.out-1').textContent += ' touch';
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
document.querySelector('.div-2').addEventListener('touchstart', SecondTouch);

function SecondTouch(event) {
    console.log(event);
    document.querySelector('.out-2').textContent = event.touches.length;
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
document.querySelector('.div-3_1').addEventListener('touchstart', ThirdTouch);
document.querySelector('.div-3_2').addEventListener('touchstart', ThirdTouch);
function ThirdTouch(event) {
    console.log(event.target);
    if (event.target.classList.contains('div-3_1')) {
        document.querySelector('.out-3').textContent = '№1'
    }
    if (event.target.classList.contains('div-3_2')) {
        document.querySelector('.out-3').textContent = '№2'
    }
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

// document.querySelector('.b-4').addEventListener('click', click4);
// function click4(event) {
//     console.log("клик")
//     document.querySelector('.div-4').addEventListener('ontouchstart', FourthTouch);
// }
// function FourthTouch(event) {
//     console.log("тач")
//     document.querySelector('.out-4').textContent += ' touch';
// }

document.querySelector('.b-4').onclick = function () {
    document.querySelector('.div-4').ontouchstart = t4;

}
function t4() {

    document.querySelector('.out-4').textContent += ' touch';
}



// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */
document.querySelector('.b-5').onclick = t5;
function t5() {
    document.querySelector('.div-4').ontouchstart = null;

};


// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */
document.querySelector('.div-4').addEventListener('touchend', t6);
function t6() {
    document.querySelector('.out-6').textContent = 'touched';
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */
document.querySelector('.div-7').ontouchstart = t7;
function t7() {

    document.querySelector('.div-7').classList.add('active');
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
// let a8 = [red, green, blue, orange, pink, yellow];
document.querySelector('.div-8').ontouchstart = t8;
function t8() {
    console.log('tut');
    let randIndx = Math.floor(Math.random() * a8.length);
    document.querySelector('.div-8').style.backgroundColor = a8[randIndx];
}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
document.querySelector('.div-9').ontouchstart = t9;
function t9(event) {
    console.log(event);
    document.querySelector('.out-9').textContent = event.touches.length;
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let w = 75;
document.querySelector('.div-10').ontouchmove = t10;
function t10() {
    console.log('tut');
    document.querySelector('.div-10').style.width = w + 1 + 'px';
    w++;
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */
document.querySelector('.div-11').ontouchstart = t11;
function t11(event) {
    console.log(event);
    document.querySelector('.out-11').textContent = `clientX:${event.touches[0].clientX}, clientY:${event.touches[0].clientY}`;

}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

function nextFunction() {

}

function prevFunction() {

}


// ваше событие здесь!!!
