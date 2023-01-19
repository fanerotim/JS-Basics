//Write a function which depending on a certain budget and season calculates the cost, type and class of a rent a car.
// Seasons are: Winter and Summer. Type of cars are - Cabrio and Jeep.
// •	Budget less or equal to 100:
// o	Class - "Economy class"
// o	According to the season the cards would be:
// 	Summer – Cabrio – 35% of budget
// 	Winter – Jeep – 65% от budget
// •	If budget is greater than 100 and less or equal 500:
// o	Class - "Compact class"
// o	According to the season:
// 	Summer - Cabrio - 45% of budget
// 	Winter - Jeep - 80% of budget 
// •	If budget is greater than 500
// o	Class – "Luxury class"
// o	In all seasons the cost of the Jeep would be 90% of budget
// Input: 1. Budget; 2.Season;
// The programme must print out:
// •	First Line – "{type of class}"
// o	"Economy class", "Compact class" or  "Luxury class"
// •	Second line – "{type of car} - {cost to rent it}"
// o	Type of can can be – "Cabrio" or  "Jeep"
// o	The cost must be rounded to two decimal points



function rentAcar(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let classType = ''
    let typeOfCar = ''
    let rentCost = 0;

    if (budget <= 100) {
        classType = "Economy class";
    } else if (budget <= 500) {
        classType = "Compact class"; 
    } else {
        classType = "Luxury class"
    }

    switch(season) {
        case "Summer":
            typeOfCar = "Cabrio";
            if (classType === "Economy class") {
                rentCost = budget * 0.35;
            } else if (classType === "Compact class") {
                rentCost = budget * 0.45;
            } else {
               typeOfCar = "Jeep";
               rentCost = budget * 0.90; 
            }
            break;
        case "Winter":
            typeOfCar = "Jeep";
            if (classType === "Economy class") {
                rentCost = budget * 0.65;
            } else if (classType === "Compact class") {
                rentCost = budget * 0.80;
            } else {
                rentCost = budget * 0.90;
            }
            break;
    }

    console.log(`${classType}`);
    console.log(`${typeOfCar} - ${(rentCost.toFixed(2))}`);
}

// rentAcar([
//     "450",
//     "Summer"
//     ]);

// rentAcar([
//     "450",
//     "Winter"
//     ]);

// rentAcar([
//     "1010",
//     "Summer"
//     ]);

// rentAcar([
//     "99.99",
//     "Summer"
//     ]);

// rentAcar([
//     "1010",
//     "Winter"
//     ]);

rentAcar([
    "70.50",
    "Winter"
    ]);
