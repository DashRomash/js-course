// task1 получилось вроде

// let out1 = document.querySelector('.out-1');
// for (let i = 0; i < 3; i++) {
//     for (let k = 0; k < 3; k++) {
//         out1.innerHTML += "*"
//     }
//     out1.innerHTML += '_'
// }


// task2 не доделано

// let out2 = document.querySelector('.out-2');

// for (let i = 1; i < 4; i++) {
//     out2.innerHTML += i + '<br>';
//     for (let k = 0; k <= 3; k++) {
//         if (k !== 3) {
//             out2.innerHTML += "*_";
//         }
//         else {
//             out2.innerHTML += "<br>";
//         }
//     }
// }

// task3 получилось

// let out3 = document.querySelector('.out-3');
// for (i = 0; i < 4; i++) {
//     for (k = 0; k < 4; k++) {
//         out3.innerHTML += "*_"
//     }
//     out3.innerHTML += "<br>"
// }

//task4 получилось

// let out4 = document.querySelector('.out-4');
// for (i = 1; i < 4; i++) {
//     out4.innerHTML += i + "_";
//     for (k = 1; k <= 5; k++) {
//         out4.innerHTML += k + "*";
//     }
// }

//task5 получилось

// let out5 = document.querySelector('.out-5');
// for (i = 1; i < 4; i++) {
//     for (k = 1; k <= 6; k++) {
//         if (k % 2 == 1) {
//             out5.innerHTML += "1"
//         }
//         else {
//             out5.innerHTML += "0"
//         }
//     }
//     out5.innerHTML += "<br>"
// }

//task6 получилось

// let out6 = document.querySelector('.out-6');
// for (i = 1; i < 4; i++) {
//     for (k = 1; k < 2; k++) {
//         out6.innerHTML += "10x01x"
//     }
//     out6.innerHTML += "<br>"
// }

//task7 ne poluchilos`

// let out7 = document.querySelector('.out-7');
// function t7() {
//     for (i = 1; i < 5; i++) {
//         console.log(i)
//         for (k = i; k <= i; k++) {
//             console.log('k', k)
//             out7.innerHTML += '*';
//         }
//         out7.innerHTML += "<br>"
//     }
// }
// t7();

//task8 получилось

// let out8 = document.querySelector('.out-8');

// for (i = 1; i <= 5; i++) {
//     for (k = i; k <= 5; k++) {
//         out8.innerHTML += '*';
//     }
//     out8.innerHTML += "<br>"
// }

//task9  ne poluchilos`


// let out9 = document.querySelector('.out-9');
// function t9() {
//     for (i = 1; i <= 5; i++) {
//         console.log(i)
//         for (k = 1; k <= i; k++) {
//             console.log('k', k)
//             out9.innerHTML += `${k}_`;
//         }
//         out9.innerHTML += "<br>";
//     }

// }
// t9();




// task10
let out10 = document.querySelector('.out-10');
res = "";
for (i = 0; i < 5; i++) {
    res += '<br>';
    for (k = 1; k <= 10; k++) {
        if (k < 10) {
            res += `${i}${k}_`;
        }
        else {
            res += `${k * (i + 1)}_`;
        }

    }
    out10.innerHTML = res;
}





















