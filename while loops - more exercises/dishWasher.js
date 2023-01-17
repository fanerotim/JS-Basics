//Gosho works in a restaurant and is responsible for the washing machine. Our task is to write a programme, which calculates if 
//a certain amount of dishwasher is sufficient for the cleaning of an 'n' number of dishes. We know that each bottle of dishwasher is 750ml.
//1 dish needs 5ml of dishwasher soap, a pot needs 15ml. Each 3rd cleaning of dishes would be only of pots, every other cleaning only of dishes. 
//Until we receive the command 'End' we would keep receiving dishes that need to be cleaned. 
//Input: 1. Number of bottles of dishwasher; 2. 'n' number of lines with dishes that need to be cleaned until we receive the command 'end' or until the dishwasher ends 
//If the dishwasher was enough, the programme must print out:
// "Detergent was enough!"
// "{number of washed dishes} dishes and {number of washed pots} pots were washed."
// "Leftover detergent {left detregent} ml."
//If the quantity of detregent was not enough, the programme must print out:
//"Not enough detergent, {leftover detregent} ml. more necessary!"


function dishWasher(input) {
    let index = 0;

    let bottlesOfDishWasher = Number(input[index]);
    index++;

    let totalDishWasher = bottlesOfDishWasher * 750;
    //One bottle of dishwasher is 750ml

    let dishes = 0;
    let pots = 0;

    let command = input[index];
    index++;

    let isEnd = false;

    while(totalDishWasher >= 0) {
        if ((index - 1) % 3 === 0) {
            totalDishWasher -= (Number(command) * 15);
            pots += Number(command);
        } else {
            totalDishWasher -= (Number(command) * 5);
            dishes += Number(command)
        }

        command = input[index];
        index++;

        if (command === "End") {
            isEnd = true;
            break;
        }
  
    }

    if (isEnd) {
        if (totalDishWasher >= 0) {
            console.log("Detergent was enough!");
            console.log(`${dishes} dishes and ${pots} pots were washed.`)
            console.log(`Leftover detergent ${totalDishWasher} ml.`)
        } else {
            console.log(`Not enough detergent, ${Math.abs(totalDishWasher)} ml. more necessary!`)
        }

    } else {
        if (totalDishWasher >= 0) {
            console.log("Detergent was enough!");
            console.log(`${dishes} dishes and ${pots} pots were washed.`)
            console.log(`Leftover detergent ${totalDishWasher} ml.`)
        } else {
            console.log(`Not enough detergent, ${Math.abs(totalDishWasher)} ml. more necessary!`)
        }
}
}

// dishWasher([
//     "2",
//     "53",
//     "65",
//     "55",
//     "End"
//     ]);

// dishWasher([
//     "0",
//     "10",
//     "15",
//     "10",
//     "12",
//     "13",
//     "30"
//     ])