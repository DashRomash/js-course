// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).

// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-string
// method: GET
// Ответ сервера (строку случайных символов) - выводит в .out-1

// не забывайте для авторизации отправлять apikey с указанным ключом.
let a1;
function f1() {
    // 1. Создаем объект
    const xhr = new XMLHttpRequest();

    // 2. Куда посылаем , параметры
    xhr.open('GET', URL + '/api/25/random/random-string');
    xhr.setRequestHeader('apikey', 'A2KNyd0Yniipc8zu');

    // 3. Обработка ответа

    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.response);
        const data = JSON.parse(xhr.response);
        console.log(data);
        console.log(data["random-string"]);
        let a1 = data["random-string"];
        document.querySelector('.out-1').textContent = a1;

    }

    // 4. Послать запрос
    xhr.send();
}

document.querySelector('.b-1').addEventListener('click', f1);


// Task 2 НЕ РАБОТАЕТ FormData

// При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-string
// method: GET
// в качестве query параметра задайте length равный числу из input .i-2
// Ответ сервера (строку случайных символов длиной length) - выводите в .out-2

// не забывайте для авторизации отправлять apikey с указанным ключом.

let a2 = parseInt(document.querySelector('.i-2').value);
let a22;
function f2() {

    //1 Создали
    const xhr = new XMLHttpRequest();

    //2 Уточнили параметры
    const url = URL + '/api/25/random/random-string';
    xhr.open('GET', url);
    xhr.setRequestHeader('apikey', 'A2KNyd0Yniipc8zu');

    const data = new FormData();
    data.append('length', a2);

    //3 Обрабатываем ответ
    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.response);
        const data1 = JSON.parse(xhr.response);
        console.log(data1);
        console.log(data1['random-string']);
        a22 = data1['random-string'];
        // if (data1['random-string']) {
        //     a22 = data1['random-string'];
        //     document.querySelector('.out-2').textContent = a22;
        // } else {
        //     console.log('ошибка')
        // }


    }
    //4 Отправляем
    xhr.send(data);

    document.querySelector('.out-2').textContent = a22;
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read
// method: POST
// если запрос отправлен верно, то будет получен массив с описаниями рас игры "Космические рейнджеры"
// выведите в .out-3 названия рас (race) через пробел.

// не забывайте для авторизации отправлять apikey с указанным ключом.
let a3;
function f3() {
    //1
    const xhr = new XMLHttpRequest();
    //2
    xhr.open('POST', URL + '/api/25/sr/read');
    xhr.setRequestHeader('apikey', 'A2KNyd0Yniipc8zu');
    //3
    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.response);
        let obj3 = JSON.parse(xhr.response);
        if (obj3['result']) {
            console.log(obj3['result'])
        } else {
            console.log("ошибка, такого нет")
        }
        obj3['result'].forEach(function (item) {
            if (item['race']) {
                console.log(item['race']);
                document.querySelector('.out-3').textContent += item['race'] + ' ';
            } else {
                console.log('ошибка')
            }
        })

    }
    //4
    xhr.send();

}
document.querySelector('.b-3').onclick = f3;


// Task 4.   опять formdata не хочет,а вот с пост запросом formdata  хорошо работает

// При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-number
// method: GET
// укажите параметры запроса min = переменной min, max равное переменной max
// если запрос отправлен верно, то будет получен массив c случайным числом от min до max
// выведите в .out-4 полученное число.

// не забывайте для авторизации отправлять apikey с указанным ключом.

let min = 1000;
let max = 1150;

function f4() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', URL + '/api/25/random/random-number');
    xhr.setRequestHeader('apikey', 'A2KNyd0Yniipc8zu');

    const data = new FormData();
    data.append('min', 1000);
    data.append('max', 1150);

    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.response);
        let a4 = JSON.parse(xhr.response);
        console.log(a4);
        document.querySelector('.out-4').textContent = a4["random-number"];
    }

    xhr.send(data);
}

document.querySelector('.b-4').onclick = f4;

// Task 5.  а вот с пост запросом formdata  хорошо работает
// При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-number
// method: POST
// укажите параметры в body POST запроса min = переменной min, max равное переменной max, формат - form-data.
// если запрос отправлен верно, то будет получен массив c случайным числом от min до max
// выведите в .out-5 полученное число.


function f5() {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', URL + '/api/25/random/random-number');
    xhr.setRequestHeader('apikey', 'A2KNyd0Yniipc8zu');

    const data = new FormData();
    data.append('min', 1000);
    data.append('max', 1150);

    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.response);
        const a5 = JSON.parse(xhr.response);
        console.log(a5);
        document.querySelector('.out-5').textContent = a5["random-number"];
    }

    xhr.send(data);
}

document.querySelector('.b-5').onclick = f5;


// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/circle
// method: POST
// без аргументов
// поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
// выведите статус ответа сервера в .out-6-status
// выведите сообщение ответа сервера в out-6-response

function f6() {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', URL + '/api/25/random/circle');
    xhr.setRequestHeader('apikey', 'A2KNyd0Yniipc8zu');

    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.response);
        document.querySelector('.out-6-status').textContent = xhr.status;
        document.querySelector('.out-6-response').textContent = xhr.response;
    }

    xhr.send();
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read
// method: GET
// укажите параметр запроса race = переменной requestRace
// если запрос отправлен верно, то будет получен массив c описанием расы гаальцев из игры "Космические рейнджеры"
// выведите в .out-7 изображение image расы. Для этого создайте image и присвойте src ссылку на изображение.
// В начале функции делайте очистку .out-7

// не забывайте для авторизации отправлять apikey с указанным ключом.

let requestRace = 'gaal';

function f7() {
    document.querySelector('.out-7').innerHTML = '';
    const xhr = new XMLHttpRequest();

    xhr.open('GET', URL + '/api/25/sr/read');
    xhr.setRequestHeader('apikey', 'A2KNyd0Yniipc8zu');

    const data = new FormData();
    data.append('race', requestRace);

    let my7Img = document.createElement('img');

    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.response);
        let data7 = JSON.parse(xhr.response);
        console.log(data7);
        console.log(data7['result']);
        console.log(data7['result'][3]);
        console.log(data7['result'][3]['image']);
        my7Img.src = URL + data7['result'][3]['image'];// выводит '/images/sr/haal.png'
        const a7 = document.querySelector('.out-7');
        if (a7) {
            a7.appendChild(my7Img);
            a7.after(document.querySelector('.b-7'));
        }
    }

    xhr.send();
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/employee/read
// method: POST
// без параметров
// если запрос отправлен верно, то будет получен массив сотрудников компании. 
// выведите в .out-8 число сотрудников компании itemCount.

function f8() {

}

document.querySelector('.b-8').onclick = f8;

// Task 9
// При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/employee/read/5
// method: POST
// где 5 - число считываемое из input .i-9. Понятно, что число может быть введено в input - любое.
// если запрос отправлен верно, то будет получен массив с описанием сотрудника компании с id = 5
// выведите обозначение (designation) сотрудника в .out-9

function f9() {

}

document.querySelector('.b-9').onclick = f9;

// Task 10
// При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/employee/read/7
// method: GET
// если запрос отправлен верно, то будет получен массив данных сотрудника с id = 7
// число 7 получайте с input .i-10
// выведите в .out-10 возраст сотрудника, данные которого вы получили.

// не забывайте для авторизации отправлять apikey с указанным ключом.

function f10() {

}

document.querySelector('.b-10').onclick = f10;

// Task 11
// При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-11 (form-data) 
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине.
// выведите в .out-11 полученный пароль.


// не забывайте для авторизации отправлять apikey с указанным ключом.

function f11() {

}

document.querySelector('.b-11').onclick = f11;

// Task 12
// При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data) 
// укажите в boyd POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
// выведите в .out-12 полученный пароль.


// не забывайте для авторизации отправлять apikey с указанным ключом.


function f12() {

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При нажатии кнопки .b-13 срабатывает функция f13. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-13 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-131
// укажите в body POST запроса аргумент uppercase равный 0 или 1, данные берем из состояния checkbox .ch-132
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы, и аналогично если uppercase равен 1 то будут символы в разных регистрах.
// выведите в .out-13 полученный пароль.


// не забывайте для авторизации отправлять apikey с указанным ключом.

function f13() {

}

document.querySelector('.b-13').onclick = f13;


// Task 14
// При нажатии кнопки .b-14 срабатывает функция f14. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read/human
// method: GET
// human - аргумент (название расы), который получается из s-14.
// если все сделано верно, то получите массив с описанием расы из игры КР.
// выведите в .out-14 описание description расы (вывод через innerHTML)

function f14() {

}

document.querySelector('.b-14').onclick = f14;


// Task 15
// При нажатии кнопки .b-15 срабатывает функция f15. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read
// method: POST
// 
// если все сделано верно, то получите массив с описанием всех рас из игры КР.
// выведите в .out-15 изображения всех рас. 
// в начале функции очистите .out-15
// выведите изображения рас в .out-15

function f15() {

}


document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии кнопки .b-16 срабатывает функция f16. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/gow/world
// method: GET
// 
// если все сделано верно, то получите массив с описанием всех миров игры GoW.
// выведите в .out-16 названия (title) миров через пробел. 

function f16() {

}


document.querySelector('.b-16').onclick = f16;


// Task 17
// При нажатии кнопки .b-17 срабатывает функция f17. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/gow/world/niflheim
// method: GET
// где niflheim - название мира полученное из .s-17.
// если все сделано верно, то получите описание выбранного в select .s-17 
// выведите в .out-17 описание мира. 

function f17() {

}


document.querySelector('.b-17').onclick = f17;


// Task 18
// При нажатии кнопки .b-18 срабатывает функция f18. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/gow/rune
// method: POST
// если все сделано верно, то получите массив с названиями миров и рунами
// выведите в .out-18 руны как изображения, а в качестве атрибута alt установите название мира. 
// выполните очистку .out-18 в начале функции

function f18() {

}


document.querySelector('.b-18').onclick = f18;
