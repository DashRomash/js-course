let a1 =
    [[0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]];


const f1 = () => {
    let b1_res = [];
    for (let i = 0; i < a1.length; i++) {
        for (let k = 0; k < a1[i].length; k++) {
            b1_res.push(a1[i][k]);;
            if (k < a1[i].length - 1) {
                b1_res.push(',')
            }
        }
        if (i < a1.length - 1) {
            b1_res.push('\n');
        }
    }
    // return b1_res.join('');
    document.querySelector('.out-1').innerHTML = b1_res.join('')
}



document.querySelector('.b-1').addEventListener('click', f1);

//ex2

function invert(array) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res.push(-arr[i]);
        } else {
            res.push(arr[i])
        }
    }
    return res;
}



//ex3
function howMuchILoveYou(nbPetals) {
    // your code
    let daisy = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let needPhrase = (daisy.length - 1) % nbPetals;
    return daisy[needPhrase];
}


//ex4
function Points(games) {
    let totalPoints = 0;
    for (let i = 0; i < games.length; i++) {
        let [ourP, oponP] = games[i].split(':').map(Number);
        if (ourP > oponP) {
            totalPoints += 3;
        } else if (ourP == oponP) {
            totalPoints += 1;
        }

    }
    return totalPoints;
}














