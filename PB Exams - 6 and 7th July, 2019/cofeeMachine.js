function coffeeMachine(input) {
    let typeOfDrink = input[0];
    let sugarOrNot = input[1];
    let drinksCount = input[2];

    let cost = 0;

    switch(typeOfDrink) {
        case "Espresso":
            if (sugarOrNot === "Without") {
                cost = 0.90;
            } else if (sugarOrNot === "Normal") {
                cost = 1;
            } else {
                cost = 1.20;
            }
            break;
        case "Cappuccino":
            if (sugarOrNot === "Without") {
                cost = 1;
            } else if (sugarOrNot === "Normal") {
                cost = 1.20;
            } else {
                cost = 1.60;
            }
            break;
        case "Tea":
            if (sugarOrNot === "Without") {
                cost = 0.50;
            } else if (sugarOrNot === "Normal") {
                cost = 0.60;
            } else {
                cost = 0.70;
            }
            break;
    }

    if (sugarOrNot === "Without") {
        cost -= cost * 0.35;
    }

    if (typeOfDrink === "Espresso" && drinksCount >= 5) {
        cost -= cost * 0.25;
    }

    let totalCost = drinksCount * cost;

    if (totalCost > 15) {
        totalCost -= totalCost * 0.20;
    }

    console.log(`You bought ${drinksCount} cups of ${typeOfDrink} for ${totalCost.toFixed(2)} lv.`)
}

coffeeMachine([
    "Espresso",
    "Without",
    "10"
    ])

coffeeMachine([
    "Cappuccino",
    "Normal",
    "13"
    ])

coffeeMachine([
    "Tea",
    "Extra",
    "3"
    ])