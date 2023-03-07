function primePairs(input) {
    let firstNumStart = Number(input[0]);
    let secondNumStart = Number(input[1]);
    let firstNumEnd = firstNumStart + Number(input[2]);
    let secondNumEnd = secondNumStart + Number(input[3]);

    let firstNum = '';
    let secondNum = '';

    let counterOne = 0;
    let counterTwo = 0;

    let firstPrime = 0;
    let secondPrime = 0;

    let firstPrimeCounter = 0;
    let secondPrimeCounter = 0;
    let newNum = '';
    let firstCouple = 0;
    let secondCouple = 0;

    for (let i = firstNumStart; i <= firstNumEnd; i++) {
        firstNum = i;

        for (let j = secondNumStart; j <= secondNumEnd; j++) {
            secondNum = j;

            newNum = `${firstNum}${secondNum}`

            firstCouple = firstNum;
            secondCouple = secondNum;

            for (let a = 2; a <= firstCouple; a++) {
                if (firstCouple % a === 0) {
                    counterOne++;
                }

                if (counterOne === 1 && a === firstCouple) {
                    firstPrime = firstCouple;
                    firstPrimeCounter++;
                    counterOne = 0;
                } else if (counterOne > 1 && a === firstCouple) {
                    counterOne = 0;
                    continue;
                } else {
                    continue;
                }

                for (let b = 2; b <= secondCouple; b++) {
                    if (secondCouple % b === 0) {
                        counterTwo++;
                    }

                    if (counterTwo === 1 && b === secondCouple) {
                        secondPrime = secondCouple;
                        secondPrimeCounter++;
                        counterTwo = 0;
                    } else if (counterTwo > 1 && b === secondCouple) {
                        counterTwo = 0;
                        continue;
                    } else {
                        continue;
                    }
                }
            }
            if (firstPrime !== 0 && secondPrime !== 0) {
                console.log(`${firstPrime}${secondPrime}`)
                firstPrime = 0;
                secondPrime = 0;
            }
        }
    }
}

primePairs([
    "10",
    "20",
    "5",
    "5"
])

primePairs([
    "10",
    "30",
    "9",
    "6"
])

primePairs([
    "51",
    "75",
    "4",
    "7"])