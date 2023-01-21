// Write a programme which can tell if the reservoir of a vehicle needs to be filled with fuel or not. 
// Input: 1. Type of fuel (Diesel, Gasoline, Gas); 2.Litres of fuel which are present in the vehicle
// If the litres in the reservoir are 25 or more the programme must print out:
// "You have enough {type of fuel}.",
// Else, if the litres are less than 25: "Fill your tank with {type of fuel}!". 
// If the user enteres fuel different than the acceptable options the programme must print out: "Invalid fuel!".


function fuelTank(input) {
    let typeOfFuel = input[0];
    let litresOfFuel = Number(input[1]);

    if (typeOfFuel !== "Diesel" && typeOfFuel !== "Gasoline" && typeOfFuel !== "Gas") {
        console.log("Invalid fuel!")
    } else {
        if (litresOfFuel >= 25) {
            console.log(`You have enough ${(typeOfFuel).toLowerCase()}.`)
        } else if (litresOfFuel < 25) {
            console.log(`Fill your tank with ${(typeOfFuel.toLowerCase())}!`)
        }
    }      
}

// fuelTank([
//     "Diesel",
//     "10"
//     ]);

// fuelTank([
//     "Gasoline",
//     "40"
//     ]);

// fuelTank([
//     "Gas",
//     "25"
//     ]);

fuelTank([
    "Kerosene",
    "200"
    ]);