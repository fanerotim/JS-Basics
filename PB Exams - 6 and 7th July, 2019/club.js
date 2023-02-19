function club(input) {
    let index = 0;

    let profitTarget = Number(input[index]);
    index++;

    let command = input[index];
    // index++;

    let coctailLength = 0;
    let orderCost = 0;

    let totalProfit = 0;

    let isCollected = false;

    while (command !== "Party!") {

        if (index % 2 !== 0) {
            coctailLength = command.length;
        }

        index++;
        command = input[index];
        index++;

        orderCost = Number(command) * coctailLength;

        if (orderCost % 2 !== 0) {
            orderCost -= orderCost * 0.25;
        }

        totalProfit += orderCost;

        command = input[index];
        // index++;

        if (totalProfit >= profitTarget) {
            isCollected = true;
            break;
        }
    }

    if (isCollected === true) {
        console.log(`Target acquired.`);
    } else {
        console.log(`We need ${(profitTarget - totalProfit).toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${totalProfit.toFixed(2)} leva.`)
    
    
}

// club([
//     "500",
//     "Bellini",
//     "6",
//     "Bamboo",
//     "7",
//     "Party!"]);

club([
    "100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"]);

