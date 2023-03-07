function primePairs(input) {
    let firstPairStart = Number(input[0]);
    let secondPairStart = Number(input[1]);
    let firstPairEnd = firstPairStart + Number(input[2]);
    let secondPairEnd = secondPairStart + Number(input[3]);

    let firstPair = 0;
    let secondPair = 0;

    let counterFirstPair = 0;
    let counterSecondPair = 0;
    let finalResultA = 0;
    let finalResultB = 0;
 
    let firstDouble = 0;
    let secondDouble = 0;


    for (let i = firstPairStart; i <= firstPairEnd; i++) {
        firstPair = i;

        for (let j = secondPairStart; j <= secondPairEnd; j++) {
            secondPair = j;

            firstDouble = firstPair;
            secondDouble = secondPair;

            for (let x = 2; x <= firstPair; x++) {

                if (firstDouble % x === 0) {
                    counterFirstPair++;
                }

                if (counterFirstPair === 1 && x === firstPair) {
                    finalResultA = firstDouble;
                    counterFirstPair = 0;
                } else if (counterFirstPair > 1 && x === firstPair) {
                    counterFirstPair = 0;
                    continue;
                } else {
                    continue;
                }


                for (let y = 2; y <= secondPair; y++) {
                    if (secondPair % y === 0) {
                        counterSecondPair++;
                    }

                    if (counterSecondPair === 1 && y === secondPair) {
                        finalResultB = secondPair;
                        counterSecondPair = 0;
                    } else if (counterSecondPair > 1 && y === secondPair) {
                        counterSecondPair = 0;
                        continue;
                    } else {
                        continue;
                    }
                }
            }
            if (finalResultA !== 0 && finalResultB !== 0) {
                console.log(`${finalResultA}${finalResultB}`)
                finalResultA = 0;
                finalResultB = 0;
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

// primePairs([
//     "10",
//     "30",
//     "9",
//     "6"
// ])

// primePairs([
//     "51",
//     "75",
//     "4",
//     "7"])