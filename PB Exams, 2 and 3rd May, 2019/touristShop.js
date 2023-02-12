function touristShop(input) {
    let index = 0;
    
    let budget = input[index];
    index++;

    let command = input[index];
    index++;

    let product = '';
    let productCounter = 0;
    let halfPriceCounter = 0;

    let spentMoney = 0;
    let currentPrice = 0;

    while (command !== "Stop") {
        product = command;
        halfPriceCounter++;

        command = input[index];
        index++;

        currentPrice = Number(command);

        if (halfPriceCounter === 3) {
            currentPrice = (currentPrice / 2);
            halfPriceCounter = 0;
        }

        if (currentPrice > budget) {
            console.log("You don't have enough money!");
            console.log(`You need ${(currentPrice - budget).toFixed(2)} leva!`);
            return;
        } 

        budget -= currentPrice;
        spentMoney += currentPrice;
        productCounter++;

        command = input[index];
        index++;
    }

    console.log(`You bought ${productCounter} products for ${spentMoney.toFixed(2)} leva.`)
}

touristShop([
    "153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"])

touristShop([
    "54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"]);
