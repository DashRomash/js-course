// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).

// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read
// method: GET

// Результат - объект со списком сотрудников. Выведите в out-1 возраст сотрудников через пробел.
// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f1() {

    const requestHeaders = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const res = await fetch("https://api.itgid.info/api/26/employee/read", {
        method: 'GET',
        headers: requestHeaders
    })
    console.log(res);

    if (!res.ok) {
        const message = 'Error: ' + Response.status;
        throw new Error(message);
    }

    const result = await res.json();
    console.log(result);
    console.log(result['result']);
    result['result'].forEach(item => {
        if (item['age']) {
            document.querySelector('.out-1').textContent += item['age'] + ' ';
        }
    })
}

document.querySelector('.b-1').addEventListener('click', f1);


// Task 2
// При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read?id=3
// method: GET
// в качестве query параметра задайте id равный числу из input .i-2

// Результат - объект с описанием сотрудника. Выведите в out-2 email полученного сотрудника.


let a2 = document.querySelector('.i-2').value;
async function f2() {

    const requestHeaders2 = new Headers();
    requestHeaders2.append('apikey', APIKEY);

    const res = await fetch('https://api.itgid.info/api/26/employee/read?id=' + a2, {
        method: "GET",
        headers: requestHeaders2
    })
    console.log(res);

    if (!res.ok) {
        const message = 'Error: ' + Response.status;
        throw new Error(message);
    }

    const result = await res.json();
    console.log(result);
    document.querySelector('.out-2').textContent = result['result']['email'];

}

document.querySelector('.b-2').onclick = f2;


// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// /api/26/employee/read/5
// method: POST
// число 5 получите из input .i-3

// Результат - объект с описанием сотрудника. Выведите в out-3 name полученного сотрудника.
let a3 = document.querySelector('.i-3').value;
async function f3() {

    const requestHeaders3 = new Headers();
    requestHeaders3.append('apikey', APIKEY);

    const res = await fetch(URL + '/api/26/employee/read/' + a3, {
        method: "POST",
        headers: requestHeaders3
    })

    if (!res.ok) {
        const message = 'Error: ' + Response.status;
        throw new Error(message);
    }

    const result = await res.json();
    console.log(result);
    document.querySelector('.out-3').textContent = result['result']['name'];
}

document.querySelector('.b-3').onclick = f3;


// Task 4. 
// При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read
// method: POST

// Результат - объект с описанием рас игры КР. Выведите в out-4 название рас (title) через пробел.


async function f4() {

    const requestHeaders4 = new Headers();
    requestHeaders4.append('apikey', APIKEY);

    const res = await fetch(URL + '/api/26/sr/read', {
        method: 'POST',
        headers: requestHeaders4
    })

    if (!res.ok) {
        const message = 'Error: ' + Response.status;
        throw new Error(message);
    }

    const result = await res.json();
    console.log(result);
    result['result'].forEach(item => {
        if (item['title']) {
            document.querySelector('.out-4').textContent += item['title'] + ' ';
        }
    })
}

document.querySelector('.b-4').onclick = f4;

// Task 5. 
// При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read?race=gaal
// method: GET
// где gaal - название расы полученное из select .s-5

// Результат - объект с описанием указанной расы. Выведите в out-5 описание расы (description). Вывод осуществляйте через innerHTML.

let a5 = document.querySelector('.s-5').value;
async function f5() {
    const requestHeaders5 = new Headers();
    requestHeaders5.append('apikey', APIKEY);
    const res = await fetch(URL + '/api/26/sr/read?race=' + a5, {
        method: 'GET',
        headers: requestHeaders5
    })
    if (!res.ok) {
        const message = 'Error: ' + Response.status;
        throw new Error(message);
    }
    const result = await res.json();
    console.log(result);
    document.querySelector('.out-5').textContent = result['result']['description'];
}

document.querySelector('.b-5').onclick = f5;


// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/run
// method: GET
// поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
// выведите статус ответа сервера в .out-6-status

async function f6() {
    const requestHeaders6 = new Headers();
    requestHeaders6.append('apikey', APIKEY);
    try {
        const res = await fetch(URL + '/api/26/run', {
            method: 'GET',
            headers: requestHeaders6
        })
        if (!res.ok) {
            const message = 'Error: ' + res.status;
            throw new Error(message);
        }
        const result = await res.json();
        console.log(result);
    } catch (error) {
        console.error(error);
        document.querySelector('.out-6-status').innerText = error.message || 'Unknown error';
    }
}
document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read/human
// method: POST
// human - название расы из select .s-7

// Результат - объект с описанием указанной расы. Выведите в out-7 изображение расы. Картинку формируйте через createElement. 
// В начале функции делайте очистку .out-7.

let a7 = document.querySelector('.s-7').value;

async function f7() {
    document.querySelector('.out-7').innerHTML = '';
    const requestHeaders7 = new Headers();
    requestHeaders7.append('apikey', APIKEY);
    const res = await fetch(URL + '/api/26/sr/read/' + a7, {
        method: 'POST',
        headers: requestHeaders7
    })
    if (!res.ok) {
        const message = 'Error: ' + res.status;
        throw new Error(message);
    }
    console.log(res);
    const result = await res.json();
    console.log(result);
    let a71 = document.createElement('img');
    a71.src = URL + result['result']['image'];
    console.log(result['result']['image'])
    document.querySelector('.out-7').appendChild(a71);
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: GET
// если запрос отправлен верно, то будет получен объект со случайным числом
// выведите в .out-8 данное число.

async function f8() {
    const requestHeaders8 = new Headers();
    requestHeaders8.append('apikey', APIKEY);
    const res = await fetch(URL + '/api/26/random/random-number', {
        method: 'GET',
        headers: requestHeaders8
    })
    if (!res.ok) {
        const message = 'Error: ' + res.status;
        throw new Error(message);
    }
    const result = await res.json();
    console.log(result);
    document.querySelector('.out-8').textContent = result["random-number"];

}

document.querySelector('.b-8').onclick = f8;

// Task 9
// При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number?min=100&max=110
// method: GET
// где min - число из переменной min. Max - число из переменной max.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-9

let min = 400;
let max = 500;

async function f9() {
    const requestHeaders9 = new Headers();
    requestHeaders9.append('apikey', APIKEY);
    const res = await fetch(URL + '/api/26/random/random-number?min=' + min + '&max=' + max, {
        method: 'GET',
        headers: requestHeaders9
    })
    if (!res.ok) {
        const message = 'Error: ' + res.status;
    }
    const result = await res.json();
    console.log(result);
    document.querySelector('.out-9').textContent = result['random-number'];

}

document.querySelector('.b-9').onclick = f9;

// Task 10
// При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: POST
// в теле POST запроса передайте параметры min равные переменной min и max равное переменной max. Формат - formdata.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-10

async function f10() {
    const requestHeaders10 = new Headers();
    const data = new FormData();
    data.append('min', min);
    data.append('max', max);
    requestHeaders10.append('apikey', APIKEY);
    const res = await fetch(URL + '/api/26/random/random-number', {
        method: 'POST',
        headers: requestHeaders10,
        body: data
    })
    if (!res.ok) {
        const message = 'Error: ' + res.status;
        throw new Error(message);
    }
    const result = await res.json();
    console.log(result);
    document.querySelector('.out-10').textContent = result['random-number']



}

document.querySelector('.b-10').onclick = f10;

// Task 11
// При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-string?length=16
// method: GET
// Значение длины строки получаем из input .i-11

// Если запрос сделан правильно, то сервер возвратит объект с строкой случайных символов длиной 16.
// Выведите строку в .out-11
let a11 = document.querySelector('.i-11').value;
async function f11() {
    const requestHeaders11 = new Headers();
    requestHeaders11.append('apikey', APIKEY);
    const res = await fetch(URL + '/api/26/random/random-string?length=' + a11, {
        method: 'GET',
        headers: requestHeaders11
    })
    if (!res.ok) {
        const message = 'Error: ' + res.status;
        throw new Error(message);
    }
    const result = await res.json();
    console.log(result);
    document.querySelector('.out-11').textContent = result["random-string"];
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
// выведите в .out-12 полученный пароль.



async function f12() {

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При нажатии кнопки .b-13 срабатывает функция f13. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-13 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-131
// укажите в body POST запроса аргумент uppercase равный 0 или 1, данные берем из состояния checkbox .ch-132
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы, и аналогично если uppercase равен 1 то будут символы в разных регистрах.
// выведите в .out-13 полученный пароль.


// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f13() {

}

document.querySelector('.b-13').onclick = f13;


// Task 14
// При нажатии кнопки .b-14 срабатывает функция f14. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world
// method: GET
// если все сделано верно, то получите объект с описанием миров игры GoW
// выведите в .out-14 title миров через пробел. 

async function f14() {

}

document.querySelector('.b-14').onclick = f14;


// Task 15
// При нажатии кнопки .b-15 срабатывает функция f15. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world/niflheim
// method: GET
// где niflheim - название мира полученное из .s-15
// выведите описание мира (description) в out-15

async function f15() {

}


document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии кнопки .b-16 срабатывает функция f16. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/governor/сурт
// method: GET
// имя правителя - получите из select .s-16
// если все сделано верно, то получите объект с описанием мира где правитель Сурт игры GoW. 
// выведите в .out-16 руну данного мира. Как изображение (createElement). Очищайте out-16 в начале функции.

async function f16() {

}


document.querySelector('.b-16').onclick = f16;


// Task 17
// При нажатии кнопки .b-17 срабатывает функция f17. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/get-time
// method: POST
// если все сделано верно, то получите объект с текущим временем сервера.
// выведите в .out-17 время в формате час:минуты

async function f17() {

}


document.querySelector('.b-17').onclick = f17;


// Task 18
// При нажатии кнопки .b-18 срабатывает функция f18. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/rune
// method: POST
// если все сделано верно, то получите объект с названиями миров и рунами
// выведите в .out-18 руны как изображения, а в качестве атрибута alt установите название мира. 
// выполните очистку .out-18 в начале функции

async function f18() {

}


document.querySelector('.b-18').onclick = f18;
