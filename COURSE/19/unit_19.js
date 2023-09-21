
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    document.querySelector('.out-1').textContent = document.querySelector('.div-1').textContent;
    console.log('функция работает');
}

// ваше событие здесь!!!
document.querySelector('.div-1').onclick = function (event) {
    t1();
    console.log(event)
};

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2() {
    if (event.altKey) {
        return true;
    }
    else {
        return false;
    }
}

// ваше событие здесь!!!
document.querySelector('.div-2').onclick = function (event) {
    t2();
    console.log(event)
    document.querySelector('.out-2').textContent = `${t2()}`;
};


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
    document.querySelector('.out-3').textContent = `${document.querySelector('.div-3').style.width}`;
}

// ваше событие здесь!!!
document.querySelector('.div-3').onclick = function (event) {
    t3();
    document.querySelector('.div-3').style.width = w3 + 'px';
    w3 = w3 + 5;

}



// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
    document.querySelector('.out-4').textContent = document.querySelector('.div-4').textContent;
}

// ваше событие здесь!!!
document.querySelector('.div-4').ondblclick = function (event) {
    t4();

}
// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
    let div5 = document.querySelector('.div-5');
    if (div5.classList.contains('active')) {
        div5.classList.remove('active');
    }
    else {
        div5.classList.add('active');
    }
}

// ваше событие здесь!!!
document.querySelector('.div-5').ondblclick = function (event) {
    t5();

}
// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
    let ul6 = document.querySelector('.ul-6');
    if (ul6.classList.contains('hide')) {
        ul6.classList.remove('hide');
    }
    else {
        ul6.classList.add('hide');
    }
}

// ваше событие здесь!!!
document.querySelector('.div-6').ondblclick = function (event) {
    t6();
}

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
    let div7 = document.querySelector('.div-7');
    if (div7.classList.contains('active')) {
        div7.classList.remove('active');
    }
    else {
        div7.classList.add('active');
    }
}

// ваше событие здесь!!!
// document.querySelector('.div-7').oncontextmenu = function (e) {
document.querySelector('.div-7').addEventListener('contextmenu', function (event) {
    event.preventDefault();
    t7();
})

// Task 8 ================ я условие даже чесно говоря не поняла=  не понимаю, решена ли задача===========================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {
    if (document.querySelector('.ch-8').checked) {
        document.event.preventDefault();
        console.log('if')
    }
    else {
        document.delete.event.preventDefault();
        console.log('else')
    }
}

// ваше событие здесь!!!
document.querySelector('.ch-8').onchange = function (event) {
    t8;
}

// Task 9 ============== кароче я добавила класс изображению, чтобы ухватиться за него это читерство.==============================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
    console.log('в функцию зашла')
    // let img9 = document.querySelector('.img-9');
    // img9.setAttribute('src', 'img / 2.png');

    let img = document.querySelector('img');// это вариант если класс не добавлять но он тоже не работает
    img.setAttribute('src', ' 2.png');
}

// ваше событие здесь!!!
document.querySelector('.div-9').oncontextmenu = function (event) {
    t9();
    event.preventDefault();
}

// Task 10 ================= не работает== ваабще чудеса происходят=========================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
    console.log('в функцию зашла 10') //ok
    let img = document.querySelector('img');
    console.log(img)
    img.setAttribute('src', '2.png');

    //     let div10 = document.querySelector('.div-10');
    //     console.log(div10)
    //     div10.setAttribute('src', '2.png');
}

// ваше событие здесь!!!
document.querySelector('.div-10').onmouseenter = function (event) {
    t10();
}
// Task 11 ================== в консоли имг меняются, а сами картинки нет==========================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11() {
    console.log('в функцию зашла 11')
    let img = document.querySelector('img');
    console.log(img)
    img.setAttribute('src', '2.png');

}
function t111() {
    console.log('в функцию зашла 111')
    let img = document.querySelector('img');
    console.log(img)
    img.setAttribute('src', '1.png');
}

// ваше событие здесь!!!
document.querySelector('.div-11').onmouseenter = function (event) {
    t11();
}
document.querySelector('.div-11').onmouseleave = function (event) {
    t111();
}
// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

// функцию пишите самостоятельно
function t12() {
    let div12 = document.querySelector('.div-12');
    div12.classList.add('active');
}
// ваше событие здесь!!!
document.querySelector('.div-12').onmousedown = function (event) {
    t12();
}

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

// функцию пишите самостоятельно
function t13() {
    let div13 = document.querySelector('.div-13');
    div13.classList.add('active');
}
function t131() {
    let div13 = document.querySelector('.div-13');
    div13.classList.remove('active');
}
// ваше событие здесь!!!
document.querySelector('.div-13').onmousedown = function (event) {
    t13();
}
document.querySelector('.div-13').onmouseup = function (event) {
    t131();
}

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
    let div14 = document.querySelector('.div-14');
    div14.onclick = (event) => {
        div14.classList.add('active');
    }

}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

function t15() {
    document.querySelector('.div-15').textContent = document.querySelector('.div-15').textContent++;
    document.querySelector('.div-15').textContent++;

}
// ваше событие здесь!!!
document.querySelector('.div-15').onmousemove = function (event) {
    t15();
}

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

function t16(e) {
    let w = 75;
    document.querySelector('.div-16').style.width = w + 1 + 'px';
    w++;
}
// ваше событие здесь!!!
document.querySelector('.div-16').onmousemove = function (event) {
    t16();
}
// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {

}
function t17Off() {

}
// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18() {

}
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19() {

}
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

function t20() {

}
// ваше событие здесь!!!