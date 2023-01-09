//Write a function that calculates the sum of money needed to buy cat and dog food. The food is purchased from a pet shop and a can of dog food costs 2.50lv, cat food 4lv.
//We receive the number of cans of dog and cat food needed. 
//Print out the final price.

function petShop(input) {
    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);

    let finalPrice = (dogFoodCount * 2.50) + (catFoodCount * 4);

    console.log(`${finalPrice} lv.`);
}

// petShop(["5", "4"]);
// petShop(["13", "9"]);