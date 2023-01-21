//Marina likes to travel. She has three pets (a cat, a god and a turtle). When she goes on a trip she has to judge how much food
//to leave them, just so they are not left hungry. Write a programme that calculates how many kilos of food would the pets need
//for the time when Marina is gone, and if the food she would leave them is sufficient. Each pet eats a certain amount of food per day.
//Input: 1.Number of days; 2.Left food in kg; 3.Food for the dog per day in kg; 4.Food for the cat per day in kg. 5;Food for the turle per day in kg;
// Output: If the left food is sufficient:
//"{food left} kilos of food left." - result must be rounded to the lower whole number
//If the food is insufficient: 
//“{insufficient amount of food} more kilos of food are needed.” - rsult must be rounded to the bigger whole number

function pets(input) {
    let daysCount = Number(input[0]);
    let foodLeft = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood = Number(input[4]);

    let dogFoodRequirement = daysCount * dogFood;
    let catFoodRequirement = daysCount * catFood;
    let turtleFoodRequirement = (daysCount * turtleFood) / 1000;

    let totalRequiredFood = dogFoodRequirement + catFoodRequirement + turtleFoodRequirement;

    if (foodLeft >= totalRequiredFood) {
        console.log(`${Math.floor(foodLeft - totalRequiredFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalRequiredFood - foodLeft)} more kilos of food are needed.`);
    }
}

// pets([
//     "2",
//     "10",
//     "1",
//     "1",
//     "1200"
//     ]);

pets([
    "5",
    "10",
    "2.1",
    "0.8",
    "321"
    ])