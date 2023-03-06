function secretDoorLock(input) {
    let hundredsLimit = Number(input[0]);
    let tensLimit = Number(input[1]);
    let onesLimit = Number(input[2]);

    let firstNum = 0;
    let secondNum = 0;
    let thirdNum = 0;

    let primeNumStart = 2;
    let primeNumEnd = 7;

    let result = '';
    
    for (let i = 1; i <= hundredsLimit; i++) {
        if (i % 2 !== 0) {
            continue;
        } else {
            firstNum = i;
        }

        let primeCounter = 0;
        let isEnd = false;

        for (let j = 1; j <= tensLimit; j++) {
            isEnd = false;
            if (j >= primeNumStart && j <= primeNumEnd) {
                for (let num = primeNumStart; num <= primeNumEnd; num++) {
                    if (j % num === 0) {
                        primeCounter++;
                        continue;
                    }

                    if (primeCounter === 1 && num === primeNumEnd) {
                        secondNum = j;
                        primeCounter = 0;
                    } else if (primeCounter > 1) {
                        isEnd = true;
                    } else {
                        continue;
                    }  
                }
            } else {
                continue;
            }

            if (j === primeNumEnd) {
                secondNum = j;
            }

            if (isEnd) {
                primeCounter = 0;
                continue;
            }

            for (let k = 1; k <= onesLimit; k++) {
                if (k % 2 === 0) {
                    thirdNum = k;
                } else {
                    continue;
                }

                result = `${firstNum} ${secondNum} ${thirdNum}`
                console.log(result)
            }      
        }   
    }
}

secretDoorLock([
    "25",
    "10000",
    "25"
    ])

// secretDoorLock([
//     "8",
//     "9",
//     "8"
//     ])