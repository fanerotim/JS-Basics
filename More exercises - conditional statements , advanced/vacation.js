function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let stayType = '';
    let location = '';
    let vacationCost = 0;

    if (budget <= 1000) {
        stayType = "Camp";
    } else if (budget <= 3000) {
        stayType = "Hut";
    } else {
        stayType = "Hotel";
    }

    switch(season) {
        case "Summer":
            location = "Alaska";
            if (stayType === "Camp") {
                vacationCost = budget * 0.65;
            } else if (stayType === "Hut") {
                vacationCost = budget * 0.80;
            } else {
                vacationCost = budget * 0.90;
            }
            break;
        case "Winter":
            location = "Morocco";
            if (stayType === "Camp") {
                vacationCost = budget * 0.45;
            } else if (stayType === "Hut") {
                vacationCost = budget * 0.60;
            } else {
                vacationCost = budget * 0.90;
            }
            break;
    }

    console.log(`${location} - ${stayType} - ${vacationCost.toFixed(2)}`)
}

// vacation([
//     "800",
//     "Summer"
//     ]);

// vacation([
//     "799.50",
//     "Winter"
//     ]);

// vacation([
//     "1100",
//     "Summer"
//     ]);

// vacation([
//     "2543.99",
//     "Winter"
//     ]);

// vacation([
//     "3460",
//     "Summer"
//     ]);

// vacation([
//     "5000",
//     "Winter"
//     ]);