// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью reverse должна развернуть массив a1 и вывести в out-1 через пробел.


let a1 = [22, 33, 44, 55, 66, 77, 88];

const f1 = () => {
    a1.reverse();
    document.querySelector('.out-1').textContent = a1.join(' ');
}


// TASK 02
// По нажатию b-2 выполняется функция f2. Функция с помощью reverse должна развернуть строку s2 и вывести в out-2.

let s2 = 'mazahackercrackall';

const f2 = () => {
    const b2 = s2.split('').reverse().join('');
    document.querySelector('.out-2').textContent = b2;
}

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция с помощью reverse должна развернуть вложенные в a3 и присвоить a3_res, вывести в out-3 через пробел. Массив a3_res очищать при старте функции.


let a3 = [[44, 55, 66], [77, 88, 99]]; // ожидаю 66 55 44 99 88 77

const f3 = () => {
    a3_res = [];
    a3_res = a3[0].reverse().concat(a3[1].reverse());
    document.querySelector('.out-3').textContent = a3_res.join(' ');
}

// TASK 04
// Функция reverse меняет исходный массив. Напишите функцию f4, которая запускается по кнопке b-4. Функция создает новый массив на основе a4 с обратным порядком элементов и возвращает его. Использовать reverse запрещено. Исходный массив - не должен изменяеться.


let a4 = [55, 66, 77, 88, 99];

const f4 = () => {
    const b4 = [];
    for (let i = a4.length - 1; i >= 0; i--) {
        b4.push(a4[i]);
    }
    document.querySelector('.out-4').textContent = b4.join(' ');
}

// TASK 05
// Напишите функцию f5, которая запускается по кнопке b-5. Функция создает и возвращает новый массив на основе a5 c попарно замененными четными и нечетными элементами. Исходный массив менять запрещено! Количество элементов в массиве всегда четное.

let a5 = [1, 2, 3, 4, 5, 6, 7, 8]; // ожидаю [2, 1, 4, 3, 6, 5, 8, 7]

const f5 = () => {
    let b5 = a5.slice();
    let res = [];
    for (let i = 0; i < b5.length; i += 2) {
        res.push(b5[i + 1], b5[i]);
    }
    console.log(res);
}

// TASK 06
//  Напишите функцию f6, которая запускается по кнопке b-6. Функция сортирует массив a6 по возрастанию и выводит в out-6 через пробел. Не указывайте функции сортировки. Изучите результат на двух значениях переменной a6.


// let a6 = [1, 4, 2, 6, 7, 3, 5, 2, 9];
a6 = ['hi', 'low', 'lo', 'hihi'];

const f6 = () => {
    let n = a6.length;
    for (let i = 0; i < n - 1; i++) {// пузырьковый метод
        for (let k = 0; k < n - i - 1; k++) {// до предпоследнего эл-та
            if (a6[k] > a6[k + 1]) {// меняй местами
                let x = a6[k];
                a6[k] = a6[k + 1];
                a6[k + 1] = x;
            }
        }
    }
    document.querySelector('.out-6').textContent = a6.join(' ');
}
document.querySelector('.b-6').addEventListener('click', f6);
// TASK 07
// Напишите функцию f7, которая запускается по кнопке b-7. Функция сортирует массив a7 по возрастанию и выводит в out-7 через пробел. Не указывайте функции сортировки. Изучите результат. Понимаете ли вы почему так произошло?


let a7 = [10, 4, 20, 6, 70, 30, 5, 2, 9];

const f7 = () => {
    let n = a7.length;
    for (let i = 0; i < n - 1; i++) {
        for (let k = 0; k < n - i - 1; k++) {
            if (a7[k] > a7[k + 1]) {
                let x = a7[k];
                a7[k] = a7[k + 1];
                a7[k + 1] = x;
            }
        }
    }
    document.querySelector('.out-7').textContent = a7.join(' ');
}
document.querySelector('.b-7').addEventListener('click', f7);

// TASK 08
//  Напишите функцию f8, которая запускается по кнопке b-8. Функция сортирует массив a8 по возрастанию и выводит в out-8 через пробел. Функцию сортировки укажите самостоятельно.

let a8 = [10, 4, 20, 6, 70, 30, 5, 2, 9];

const f8 = () => {
    a8.sort((a, b) => {
        return a - b;
    });
    document.querySelector('.out-8').textContent = a8.join(' ');
}

// TASK 09
// Напишите функцию f9, которая запускается по кнопке b-9. Функция сортирует массив a9  по возрастанию или по убыванию в зависимости от аргумента s. Если s равно ASC - то по возрастанию, если s равно DESC то по убыванию, и возвращает измененный массив.

let a9 = [9, 9, 45, 3, 1, 83, 50, 6, 5, 35, 8, 4]; //в аут-8 вывеодится а в 9 нет

const f9 = (s) => {
    a9.sort((a, b) => {
        if (s === 'ASC') {
            return a - b;
        } else if (s === 'DESC') {
            return b - a;
        }
    });
    document.querySelector('.out-9').innerHTML = a9.join(' ');
}


// TASK 10
// По нажатию b-10 выполняется функция f10. Функция сортирует массив a10 по полю age (по позрастанию) и выводит имена (после сортировки) в out-10. Вывод через пробел.

let a10 = [
    { "name": "Ivan", "age": 34 },
    { "name": "Petro", "age": 24 },
    { "name": "Orest", "age": 45 },
    { "name": "Virii", "age": 35 },
    { "name": "Blamo", "age": 47 },
    { "name": "Vandeya", "age": 27 },
    { "name": "Inna", "age": 35 },
    { "name": "Gretta", "age": 25 },
    { "name": "Brianna", "age": 55 }
];

const f10 = () => {
    a10.sort((a, b) => {
        return a.age - b.age;
    });
    // console.log(a10);
    const names = a10.map(item => item.name);
    document.querySelector('.out-10').textContent = names.join(' ');
}



document.querySelector('.b-1').addEventListener('click', f1);
document.querySelector('.b-2').addEventListener('click', f2);
document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', f4);
document.querySelector('.b-5').addEventListener('click', f5);
document.querySelector('.b-6').addEventListener('click', f6);
document.querySelector('.b-7').addEventListener('click', f7);
document.querySelector('.b-8').addEventListener('click', f8);
document.querySelector('.b-9').addEventListener('click', () => {
    document.querySelector('.out-9').innerHTML = f9('ASC');
});
document.querySelector('.b-10').addEventListener('click', f10);