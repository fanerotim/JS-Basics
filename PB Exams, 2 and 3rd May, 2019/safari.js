function safari(input) {
    let budget = Number(input[0]);
    let neededFuel = Number(input[1]);
    let dayOfWeek = input[2];
    
    let fuelPrice = 2.10;
    let guidePrice = 100;

    let totalFuelPrice = neededFuel * fuelPrice;
    let totalPrice = totalFuelPrice + guidePrice;

    if (dayOfWeek === "Saturday") {
        totalPrice-= totalPrice * 0.10;
    } else if (dayOfWeek === "Sunday") {
        totalPrice -= totalPrice * 0.20;
    }

    if (totalPrice <= budget) {
        console.log(`Safari time! Money left: ${(budget - totalPrice).toFixed(2)} lv.`)
    } else {
        console.log(`Not enough money! Money needed: ${(totalPrice - budget).toFixed(2)} lv.`)
    }
}

safari(["1000",
        "10",
        "Sunday"]);

safari([
    "120",
    "30",
    "Saturday"]);

safari([
    "105.20",
    "15",
    "Sunday"
    ])
