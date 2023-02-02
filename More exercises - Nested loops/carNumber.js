//Write a function that generates "special" automobile plates. Each "special" plate consists of four numbers.
//The criteria which separates the "special" from the standard automobile plates are:
//1. If the number starts with an even digit then it needs to end with an odd digit and vice versa - if it starts with an odd digit, it needs to end with an even one.
//2. First digit always needs to be bigger than the last one
//3. The sum of the second and third digits has to be an even number.
//Input: 1. The start of the interval of the numbers. 2. End of the interval of the numbers.
//The programme must print out all "special" numbers separated with a space 
function carNumber(input) {
    let intervalStart = Number(input[0]);
    let intervalEnd = Number(input[1]);

    let firstNum = 0;
    let secondNum = 0;
    let thirdNum = 0;
    let fourthNum = 0;

    let finalNumber = '';

    for (let firstLoopNum = intervalStart; firstLoopNum <= intervalEnd; firstLoopNum++) {
        firstNum = firstLoopNum;
        for (let secondLoopNum = intervalStart; secondLoopNum <= intervalEnd; secondLoopNum++){
            secondNum = secondLoopNum;
            for (let thirdLoopNum = intervalStart; thirdLoopNum <= intervalEnd; thirdLoopNum++) {
                thirdNum = thirdLoopNum;
                for (let fourthLoopNum = intervalStart; fourthLoopNum <= intervalEnd; fourthLoopNum++) {
                    fourthNum = fourthLoopNum
                    // console.log(`${firstNum}${secondNum}${thirdNum}${fourthNum}`)

                    if (firstNum % 2 === 0 && fourthNum % 2 !== 0) {
                        if (firstNum > fourthNum) {
                            if ((secondNum + thirdNum) % 2 === 0) {
                                finalNumber += `${firstNum}${secondNum}${thirdNum}${fourthNum} `
                            }
                        }
                    } else if (firstNum % 2 !== 0 && fourthNum % 2 === 0) {
                        if (firstNum > fourthNum) {
                            if ((secondNum + thirdNum) % 2 === 0 ) {
                                finalNumber += `${firstNum}${secondNum}${thirdNum}${fourthNum} `
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(finalNumber)
}

// carNumber([
//     "2",
//     "3"
//     ]);

// carNumber([
//     "3",
//     "5"
//     ]);

carNumber([
    "5",
    "8"
    ]);