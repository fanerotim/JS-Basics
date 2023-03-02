function sumOfTwoNumbers(input) {
    let intervalStart = Number(input[0]);
    let intervalEnd = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;
    let isFound = false;

    let firstNum = 0;
    let secondNum = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        firstNum = i;
        for (let j = intervalStart; j <= intervalEnd; j++) {
            secondNum = j;
            counter++;
            if (i + j === magicNumber) {
                isFound = true;
                break;
            } else {
                continue;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (isFound) {
        console.log(`Combination N:${counter} (${firstNum} + ${secondNum} = ${magicNumber})`)
    } else {
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }

}

// sumOfTwoNumbers([
//     "1",
//     "10",
//     "5"
// ])

// sumOfTwoNumbers([
//     "23",
//     "24",
//     "20"
// ])

// sumOfTwoNumbers([
//     "88",
//     "888",
//     "1000"
// ])

sumOfTwoNumbers([
    "88",
    "888",
    "2000"
])

