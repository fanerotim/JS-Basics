//Write a programme that generates unique PIN codes. The digits of each PIN code are in a certain interval.
//To be valid, a certain PIN code has to meet the following criteria:
//1. First and third digit need to be even numbers. 2. Second digit has to be a prime number in the range (2-7)
//Input: 1.End of interval of first digit. 2. End of interval of second digit. 3. End of interval of third digit.
//Print out all valid PIN codes.

function uniquePinCodes(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);

    let intervalStart = 2;
    let intervalEnd = 7;

    let numOne = 0;
    let numTwo = 0;
    let numThree = 0;

    for (let firstDigit = 1; firstDigit <= firstNum; firstDigit++) {
        if (firstDigit % 2 === 0) {
            numOne = firstDigit;
        } else {
            continue;
        }

        for (let secondDigit = 2; secondDigit <= secondNum; secondDigit++) {
            // secondDigit starts from 2 as we are looking for all prime numbres
            // since non-prime numbers can also be devided by 1, we start from 2
            let counter = 0;
            let isEnd = false;

            if (secondDigit > intervalEnd) {
                continue;
            }

            //i represents the numbers in the interval (2-7)
            for (let i = intervalStart; i <= intervalEnd; i++) {
                if (secondDigit % i === 0) {
                    counter++;
                }

                if (i === intervalEnd) {
                    if (counter === 1) {
                        numTwo = secondDigit;
                    } else {
                        isEnd = true;
                        continue;
                    }
                }
            }

            if (isEnd === true) {
                continue;
            }

            for (let thirdDigit = 1; thirdDigit <= thirdNum; thirdDigit++) {
                if (thirdDigit % 2 === 0) {
                    numThree = thirdDigit;

                } else {
                    continue;
                }
                console.log(`${numOne} ${numTwo} ${numThree}`)
            }
        }
    }
}

uniquePinCodes([
    "3",
    "100",
    "5"
])

// uniquePinCodes([
//     "8",
//     "2",
//     "8"
//     ])