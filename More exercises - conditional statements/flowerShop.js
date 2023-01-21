// Maria wants to buy a present for her son. She works in a flower shop. The shop receives an order. 
// Write a function that checks if the money Maria makes from the order she received would be enough for the present.
// Flower costs:
// •	Magnolias – 3.25 
// •	Hyacinth – 4 
// •	Roses – 3.50 
// •	Cactuses – 8
// From the total sum Maria has to pay 5% tax.
// Input: 1. Number of magnolias; 2. Number of hyacinth; 3.Number of roses; 4. Number of cactuses; 5. Cost of present
//Output: If the money are enough:
//"She is left with {left money} leva." - result must be rounded to the lower whole number
//Else:
//"She will have to borrow {money needed} leva." - result must be rounded to bigger whole number

function flowerShop(input) {
    let magnoliasCount = Number(input[0]);
    let hyacinthCount = Number(input[1]);
    let roseCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let presentCost = Number(input[4]);

    let magnoliasCost = 3.25;
    let hyacinthCost = 4;
    let roseCost = 3.50;
    let cactusCost = 8;

    let tax = 0.05;

    let orderCost = (magnoliasCount * magnoliasCost) + (hyacinthCount * hyacinthCost) + (roseCount * roseCost) + (cactusCount * cactusCost);
    let moneyWon = orderCost - (orderCost * tax);

    if (moneyWon >= presentCost) {
        console.log(`She is left with ${Math.floor(moneyWon - presentCost)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(presentCost - moneyWon)} leva.`);
    }

}

// flowerShop([
//     "2",
//     "3",
//     "5",
//     "1",
//     "50"
//     ]);

flowerShop([
    "15",
    "7",
    "5",
    "10",
    "100"
    ]);