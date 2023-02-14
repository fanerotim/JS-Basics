function divisionWithoutRemainder(input) {
    let numbersCount = Number(input[0]);
    
    let firstCounter = 0;
    let secondCounter = 0;
    let thirdCounter = 0;

    for (let i = 1; i < input.length; i++) {
        let currentNum = input[i];

        if (currentNum % 2 === 0) {
            firstCounter++;
        }

        if (currentNum % 3 === 0) {
            secondCounter++;
        }

        if (currentNum % 4 === 0) {
            thirdCounter++;
        }
    }

    let firstPercentage = (firstCounter / numbersCount) * 100;
    let secondPercentage = (secondCounter / numbersCount) * 100;
    let thirdPercentage = (thirdCounter / numbersCount) * 100;

    console.log(`${firstPercentage.toFixed(2)}%`);
    console.log(`${secondPercentage.toFixed(2)}%`);
    console.log(`${thirdPercentage.toFixed(2)}%`);

}

divisionWithoutRemainder([
    "10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"]);

// divisionWithoutRemainder([
//     "3",
//     "3",
//     "6",
//     "9"])

