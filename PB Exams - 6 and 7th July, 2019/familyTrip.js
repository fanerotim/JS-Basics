function familyTrip(input) {
    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let additionalExpenses = Number(input[3]);

    let percentageOtherExpenses = additionalExpenses / 100;
    
    if (nightsCount > 7) {
        pricePerNight -= pricePerNight * 0.05;
    }

    budget -= budget * percentageOtherExpenses;

    let totalCost = nightsCount * pricePerNight;

    if (budget >= totalCost) {
        console.log(`Ivanovi will be left with ${(budget - totalCost).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(totalCost - budget).toFixed(2)} leva needed.`)
    }
}

familyTrip([
    "800.50",
    "8",
    "100",
    "2"
    ])

familyTrip([
    "500",
    "7",
    "66",
    "15",
    ])