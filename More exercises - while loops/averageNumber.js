function averageNumber(input) {
    let index = 0;

    let numberOfnumbers = Number(input[index]);
    index++;

    let command = Number(input[index]);
    index++;

    let sum = 0;
    let numbersCount = 0;

    while(index < (numberOfnumbers + 2)) {
        sum += command;
        numbersCount++;

        command = Number(input[index]);
        index++;
    }
    console.log((sum / numbersCount).toFixed(2));
}

averageNumber([
    "4",
    "3",
    "2",
    "4",
    "2"
    ])

averageNumber([
    "2",
    "6",
    "4",
    ])

averageNumber([
    "3",
    "82",
    "43",
    "22"
    ])

averageNumber([
    "4",
    "95",
    "23",
    "76",
    "23"
    ])