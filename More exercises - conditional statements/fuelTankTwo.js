//Write a programme which calculates how much it would cost a driver to fill in the reservoir of his vehicle
//when you know the type of fuel he uses, the price of the fuel per litre and if the driver has a discount card. 
//Costs of the fuels are:
//Gasoline - 2.22 per litre
//Diesel - 2.33 per litre
//Gas - 0.93 per litre
//If the driver has a discount card, he uses the following discounts per litre of fuel: 0.18 gasoline, 0.12 diesel, 0.08 gas.
//If the driver has refuelled between 20 to 25 litres, he gets 8 percent discount from the final price. 
//If he refuells more than 25 litres, then he gets 10 percent discount from the final price. 
//Input: 1. Type of fuel; 2. Amount of fuel; 3. Possession of club/discount card;
//Expected Output:•	"{final price of fuel} lv." - result must be rounded to two decimal points

function fuelTankTwo(input) {
    let fuelType = input[0];
    let fuelAmount = Number(input[1]);
    let discountCard = input[2];

    let fuelCost = 0;
    let totalFuelCost = 0;

    switch(fuelType) {
        case "Gasoline":
            fuelCost = 2.22;
            if (discountCard === "Yes") {
                fuelCost -= 0.18;
            }
            break;
        
        case "Diesel":
            fuelCost = 2.33;
            if (discountCard === "Yes") {
                fuelCost -= 0.12;
            }
            break;

        case "Gas":
            fuelCost = 0.93;
            if (discountCard === "Yes") {
                fuelCost -= 0.08;
            }
            break;
    }

    totalFuelCost = fuelAmount * fuelCost;

    if (fuelAmount >= 20 && fuelAmount <= 25) {
        totalFuelCost -= totalFuelCost * 0.08;
    } else if (fuelAmount > 25) {
        totalFuelCost -= totalFuelCost * 0.10;
    }

    console.log(`${totalFuelCost.toFixed(2)} lv.`);
}

// fuelTankTwo([
//     "Gas",
//     "30",
//     "Yes"
//     ]);

// fuelTankTwo([
//     "Gasoline",
//     "25",
//     "No"
//     ]);

// fuelTankTwo([
//     "Diesel",
//     "19",
//     "No"
//     ]);