//A vineyard with 'x' square meters 40% are used for wine production. From 1sqm of the vineyard farmers collect 'y' kilos grapes. 
//For 1 litre of wine are needed 2.5kg of grapes. The farmer also wants to sell 'z' number of litres of wine.
//Write a programme which calculates how much wine is possible to be produced and if that quantity is enough. If it's enough, the remaining wine is being devided equally between the employees on the vineyard. 
//Input: 1.Square meters vineyard; 2.Number of grapes for 1sqm; 3.Required litres of wine; 4.Number of employees;
// Output: If the produced wine is less than the required:
//“It will be a tough winter! More {insufficient wine} liters wine needed.” - result must be rounded to the lower whole number
// If the produced wine e as much as more than the requirement:
//“Good harvest this year! Total wine: {total litres} liters.” - result must be rounded to the lower whole number
//“{Lef wine} liters left -> {wine for one employee} liters per person.” - result must be rounded to the bigger whole number

function produce(input) {
    let vineyardSpace = Number(input[0]);
    let grapesPerSqM = Number(input[1]);
    let requiredLitresOfWine = Number(input[2]);
    let employeesCount = Number(input[3]);

    let grapeProduce = vineyardSpace * grapesPerSqM;
    let grapeUsedForWine = grapeProduce * 0.40;
    let litresOfWine = grapeUsedForWine / 2.5;
    let insufficientLitresOfWine = Math.abs(requiredLitresOfWine - litresOfWine);
    let wineLeft = litresOfWine - requiredLitresOfWine;

    if (litresOfWine < requiredLitresOfWine) {
        console.log(`It will be a tough winter! More ${Math.floor(insufficientLitresOfWine)} liters wine needed.`)
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(litresOfWine)} liters.`)
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(wineLeft / employeesCount)} liters per person.`)
    }
}

// produce([
//     "650",
//     "2",
//     "175",
//     "3"
//     ]);

produce([
    "1020",
    "1.5",
    "425",
    "4"
    ])