function substitute(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    let intervalEndK = 8;
    let intervalStartL = 9;
    let intervalEndM = 8;
    let intervalStartN = 9;
    
    let firstNum = 0;
    let secondNum = 0;
    let thirdNum = 0;
    let fourthNum = 0;

    let counter = 0;

    for (let i = k; i <= intervalEndK; i++) {
        if (i % 2 === 0) {
            firstNum = i;
        } else {
            continue;
        }
        for (let j = intervalStartL; j >= l; j--) {
            if (j % 2 !== 0) {
                secondNum = j;
            } else {
                continue;
            }
            for (let a = m; a <= intervalEndM; a++) {
                if (a % 2 === 0) {
                    thirdNum = a;
                } else {
                    continue;
                }
                for (let b = intervalStartN; b >= n; b--) {
                if (b % 2 !== 0) {
                    fourthNum = b;
                }  else {
                    continue;
                }

                if (firstNum === thirdNum && secondNum === fourthNum) {
                    console.log("Cannot change the same player.")
                } else {
                    counter++;

                    if (counter > 6) {
                        return;
                    }
                    console.log(`${firstNum}${secondNum} - ${thirdNum}${fourthNum}`)
                }
                    
                }
            }
        }
    }
}

// substitute([
//     "7",
//     "6",
//     "8",
//     "5"]);

substitute([
    "6",
    "7",
    "5",
    "6"]);

