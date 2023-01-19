//Write a function, which depending on a certain budget and season calculates the price, location and type of stay of a vacataion.
//The seasons are "Summer" and "Winter". Locations are "Alaska" and "Morocco". Types of stay are - "Hotel", "Hut" and "Camp".
// •	Budget less than 1000
// o	Stay is "Camp"
// o	Depending on the season, location would be one of the following and its cost would be: 
// 	Summer - Alaska - 65% of budget 
// 	Winter - Morroco - 45% of budget 
// •	If budget is greater than 1000 and less than 3000
// o	Stay is "Hut"
// o	Depending on the season, location would be one of the following and its cost would be:
// 	Summer - Alaska - 80% of the budget 
// 	Winter - Morroco - 60% of the budget
// •	If budget is greater than 3000
// o	Stay is "Hotel"
// o	Depending on the season, location would be one of the following and its cost would be 90% of budget
// 	Summer - Alaska 
// 	Winter - Morroco
//Input: 1. budget; 2.Season;
// Output shuld be "{location} – {type of stay} – {cost}" - rounded to two decimal points.

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