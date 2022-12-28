//Peter wants to buy gpus, processors and ram. If the number of gpus is bigger than the number of processors he gets 15% discount of the final price.
// gpu = 250 leva, processor costs 35% of the price of the bought gpus and ram drive costs 10% of the bought gpus. 
//Find out the needed amount of money for the required items and if the budget would be sufficient. 
// We receive Peter's budget, number of gpus, processors and ram drives.

function shopping(input) {
     let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpu = 250;
    let processor = (gpuCount * 250) * 0.35;
    let ram = (gpuCount * 250) * 0.10;

    let totalPrice = (gpuCount * gpu) + (processorCount * processor) + (ramCount * ram);

    if (gpuCount > processorCount) {
        totalPrice -= (totalPrice * 0.15);
    }

    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
    }

}

// shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);