//Lily is 'n' numer of years. On each of her birthdays she receives a gift. 
//For her even birthdays (2,4,6 etc) she receives money and for the odd birthdays (1,3,5 etc) she receives toys. 
//For her second birthday she receives 10 leva, for each following even birthday she receives 10 more (4th birthday = 20leva, 6th = 30 leva, 8th = 40 leva etc).
//Lily has secretly saved all her birthday money over the years. Her brother has taken 1 lev from the money she received for her even birthdays. 
// Lily has sold the toys she received over the years to add that money to her saved money in order to buy a washing machine. 
// Write a function to check if she has enough money to buy the washing machine.
//We receive: Lily's age, the cost of the washing machine and the price per toy for which she has sold her toys.

function smartLily(input) {
    let age = Number(input[0]);
    let washingMachineCost = Number(input[1]);
    let toyCost = Number(input[2]);

    let toysReceived = 0;
    let money = 0;
    let bonusMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            buff += 10;
            money += bonusMoney - 1;
        } else {
            toysReceived += 1; 
        }

    }

    toysReceived = toysReceived * toyCost;
    let totalSum = money + toysReceived;

    if (totalSum >= washingMachineCost) {
        console.log(`Yes! ${(totalSum - washingMachineCost).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachineCost - totalSum).toFixed(2)}`)
    }
}

// smartLily(["10", "170.00", "6"]);
smartLily(["21", "1570.98", "3"]);