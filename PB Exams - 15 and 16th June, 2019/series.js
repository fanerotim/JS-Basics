function series(input) {
    let budget = Number(input[0]);
    let seriesCount = Number(input[1]);
    
    let currentCost = 0;
    let currentSeries = '';

    let command = '';
    let totalCost = 0;

    for (let i = 2; i < input.length; i++) {
         command = input[i];

        if (i % 2 === 0) {
            currentSeries = command;
            continue;
        } else {
            currentCost = Number(command);
        }

        if (currentSeries === "Thrones") {
            currentCost -= currentCost * 0.50;
        } else if (currentSeries === "Lucifer") {
            currentCost -= currentCost * 0.40;
        } else if (currentSeries === "Protector") {
            currentCost -= currentCost * 0.30;
        } else if (currentSeries === "TotalDrama") {
            currentCost -= currentCost * 0.20;
        } else if (currentSeries === "Area") {
            currentCost -= currentCost * 0.10;
        }

        totalCost += currentCost;
    }

    if (budget >= totalCost) {
        console.log(`You bought all the series and left with ${(budget - totalCost).toFixed(2)} lv.`)
    } else {
        console.log(`You need ${(totalCost - budget).toFixed(2)} lv. more to buy the series!`)
    }
}

series([
    "10",
    "3",
    "Thrones",
    "5",
    "Riverdale",
    "5",
    "Gotham",
    "2"]);

series([
    "25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"]);
