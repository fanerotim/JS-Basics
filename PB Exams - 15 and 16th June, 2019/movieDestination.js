function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysCount = Number(input[3]);

    let costPerDay = 0;
    
    switch(season) {
        case "Winter":
            if (destination === "Dubai") {
                costPerDay = 45000;
            } else if (destination === "Sofia") {
                costPerDay = 17000;
            } else if (destination === "London") {
                costPerDay = 24000;
            }
            break;
        case "Summer":
            if (destination === "Dubai") {
                costPerDay = 40000;
            } else if (destination === "Sofia") {
                costPerDay = 12500;
            } else if (destination === "London") {
                costPerDay = 20250;
            }
            break;
    }

    let totalCost = daysCount * costPerDay;

    if (destination === "Dubai") {
        totalCost -= totalCost * 0.30;
    } else if (destination === "Sofia") {
        totalCost += totalCost * 0.25;
    }

    if (budget >= totalCost) {
        console.log(`The budget for the movie is enough! We have ${(budget - totalCost).toFixed(2)} leva left!`)
    } else {
        console.log(`The director needs ${(totalCost - budget).toFixed(2)} leva more!`)
    }
}

movieDestination([
    "400000",
    "Sofia",
    "Winter",
    "20"])

movieDestination([
    "1000000",
    "Dubai",
    "Summer",
    "5"]);

movieDestination([
    "200000",
    "London",
    "Summer",
    "7"]);

