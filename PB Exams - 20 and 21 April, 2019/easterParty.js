function easterParty(input) {
    let guestsCount = Number(input[0]);
    let costPerPerson = Number(input[1]);
    let budget = Number(input[2]);

    let pricePerPerson = 0;

    if (guestsCount >= 10 && guestsCount <= 15) {
        pricePerPerson = costPerPerson * 0.85;
    } else if (guestsCount > 15 && guestsCount <= 20) {
        pricePerPerson = costPerPerson * 0.80;
    } else if (guestsCount > 20) {
        pricePerPerson = costPerPerson * 0.75;
    } else {
        pricePerPerson = costPerPerson;
    }

    let cake = budget * 0.10;

    let totalCost = (pricePerPerson * guestsCount) + cake;

    if (budget >= totalCost) {
        console.log(`It is party time! ${(budget - totalCost).toFixed(2)} leva left.`)
    } else if (budget < totalCost) {
       console.log(`No party! ${(totalCost - budget).toFixed(2)} leva needed.`) 
    }
}

// easterParty([
//     "18",
//     "30",
//     "450"])

// easterParty([
//     "8",
//     "25",
//     "340"])

easterParty([
    "24",
    "35",
    "550"])


