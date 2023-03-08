function luckyNumbers(input) {
    let num = Number(input[0]);

    let intervalEnd = 9;

    let firstLuckyNum = 0;
    let secondLuckyNum = 0;
    let thirdLuckyNum = 0;
    let fourthLuckyNum = 0;

    let finalResult = '';

    for (let firstNum = 1; firstNum <= num; firstNum++) {
        firstLuckyNum = firstNum;
        if (firstLuckyNum > intervalEnd)
            break;

        for (let secondNum = 1; secondNum <= num; secondNum++) {
            secondLuckyNum = secondNum;
            if (secondLuckyNum > intervalEnd)
                break;
            for (let thirdNum = 1; thirdNum <= num; thirdNum++) {
                thirdLuckyNum = thirdNum;
                if (thirdLuckyNum > intervalEnd)
                    break;
                for (let fourthNum = 1; fourthNum <= num; fourthNum++) {
                    fourthLuckyNum = fourthNum;
                    if (fourthLuckyNum > intervalEnd)
                        break;

                    if ((firstLuckyNum + secondLuckyNum) === (thirdLuckyNum + fourthLuckyNum)) {
                        if (num % (firstLuckyNum + secondLuckyNum) === 0) {
                            finalResult += `${firstLuckyNum}${secondLuckyNum}${thirdLuckyNum}${fourthLuckyNum} `
                        }
                    }
                }
            }
        }
    }
    console.log(finalResult);

}

// luckyNumbers(["3"]);
// luckyNumbers(["7"]);
luckyNumbers(["10000"]);