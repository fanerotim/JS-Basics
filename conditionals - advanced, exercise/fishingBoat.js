//Tony and his friends love fishing a lot. They decide to go fishing with a boat. The cost to rent the boat depends on the season and 
// the number of fishermen. 
// Seasons: Spring - 3000 leva, Summer and Autumn - 4200 leva, Winter - 2600 leva. 
// Number of fishermen: up to 6 people - 10% discount, 6 to 11 - 15% discount, 12 and above - 25% discount. 
// Is the number of fishermen is even and the seasons is not Autumn, then they get another 5% discount. 
// Write a function which would check and tell the fishermen if they have enough monet to rent the boat. 
// We receive - budget, seasons and number of fishermen.

function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermenCount = Number(input[2]);

    let boatPrice = 0;

    switch(season) {
        case "Spring":
            boatPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatPrice = 4200;
            break;
        case "Winter":
            boatPrice = 2600;
            break;
    }

    if (fishermenCount <= 6) {
        boatPrice -= boatPrice * 0.10;
    } else if (fishermenCount > 6 && fishermenCount <= 11) {
        boatPrice -= boatPrice * 0.15;
    } else {
        boatPrice -= boatPrice * 0.25;
    }

    if (fishermenCount % 2 === 0 && season !== "Autumn") {
        boatPrice -= boatPrice * 0.05;
    }

    if (budget >= boatPrice) {
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "7"]);
fishingBoat(["2000", "Winter", "13"]);
