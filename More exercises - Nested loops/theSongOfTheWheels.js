function theSongOfTheWheels(input) {
    let num = Number(input[0]);

    let firstDig = 0;
    let secondDig = 0;
    let thirdDig = 0;
    let fourthDig = 0;

    let result = '';
    let counter = 0;
    secretNum = 0;

    let intervalStart = 1;
    let intervalEnd = 9;

    let isFound = false;
    let isResult = false;

    for (let a = intervalStart; a <= intervalEnd; a++) {
        firstDig = a;
        for (let b = intervalStart; b <= intervalEnd; b++) {
            secondDig = b;
            for (let c = intervalStart; c <= intervalEnd; c++) {
                thirdDig = c;
                for (let d = intervalStart; d <= intervalEnd; d++) {
                    fourthDig = d;

                    if (a < b && c > d) {
                        if ((a * b) + (c * d) === num) {
                            
                            result += `${firstDig}${secondDig}${thirdDig}${fourthDig} `
                            counter++;
                            isResult = true;

                            if (counter === 4) {
                                isFound = true;
                                secrectNum = `${firstDig}${secondDig}${thirdDig}${fourthDig}`;
                            }
                        }
                    } else {
                        continue;
                    }

                }
            }
        }
    }

    if (isFound) {
        console.log(result)
        console.log(`Password: ${secrectNum}`)
        return;
    }

    if (isResult) {
        console.log(result)
        console.log("No!")
    } else {
        console.log("No!")
    }
}

// theSongOfTheWheels(["11"])
// theSongOfTheWheels(["139"])
// theSongOfTheWheels(["110"])
theSongOfTheWheels(["55"])