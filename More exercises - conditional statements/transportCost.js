//A student would have to travel 'n' number of kilometers. He has three types of transport:
// Taxi: Initial cost 0.70; Day fare - 0.79 per km; Night fare - 0.90 per km.
// Bus - 0.09 per km. Can be used for minimum 20km;
// Train - 0.06 per km. Can be used for minimum 100km. 
//Write a programme that calculates the price of the most cheap type of transport for the student. 
//Input: 1. 'n' number of kilometers; 2. 'day' or 'night';
// Output: Print out the lowest cost to travel the given amount of kilometers. Result must be rounded to two decimal points.

function transportCost(input) {
    let numberOfKilometers = Number(input[0]);
    let timeOfDay = input[1];

    let costPerKilometer = 0;
    let taxiInitialCost = 0.70;

    if (numberOfKilometers >= 20 && numberOfKilometers < 100) {
        costPerKilometer += 0.09;
        console.log((numberOfKilometers * costPerKilometer).toFixed(2));
    } else if (numberOfKilometers >= 100) {
        costPerKilometer += 0.06;
        console.log((numberOfKilometers * costPerKilometer).toFixed(2));
    } else {
        if (timeOfDay === "day") {
            costPerKilometer += 0.79;
            console.log(((numberOfKilometers * costPerKilometer) + taxiInitialCost).toFixed(2));
        } else {
            costPerKilometer += 0.90;
            console.log(((numberOfKilometers * costPerKilometer) + taxiInitialCost).toFixed(2));
        }
    }
}

transportCost([
    "5",
    "day"
    ]);

transportCost([
    "7",
    "night"
    ]);

transportCost([
    "25",
    "day"
    ]);

transportCost([
    "180",
    "night"
    ]);
