function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let setCount = Number(input[2]);

    price = 0;

    switch (fruit) {
        case "Watermelon":
            if (size === "small") {
                price = 56;
            } else {
                price = 28.70;
            }
            break;
        case "Mango":
            if (size === "small") {
                price = 36.66;
            } else {
                price = 19.60;
            }
            break;
        case "Pineapple":
            if (size === "small") {
                price = 42.10;
            } else {
                price = 24.80;
            }
            break;
        case "Raspberry":
            if (size === "small") {
                price = 20;
            } else {
                price = 15.20;
            }
            break;
    }

    let finalPrice = 0;

    if (size === "big") {
        finalPrice += (setCount * price) * 5;
    } else if (size === "small") {
        finalPrice += (setCount * price) * 2;
    }

    if (finalPrice >= 400 && finalPrice <= 1000) {
        finalPrice -= finalPrice * 0.15;
    } else if (finalPrice > 1000) {
        finalPrice -= finalPrice * 0.50;
    }

    console.log(`${finalPrice.toFixed(2)} lv.`)

}

energyBooster([
    "Watermelon",
    "big",
    "4"
    ])

energyBooster([
    "Pineapple",
    "small",
    "1"
]);

energyBooster([
    "Raspberry",
    "small",
    "50"
]);

energyBooster([
    "Mango",
    "big",
    "8"
]);

