// Jessy decided to save money for a holiday and wants us to write a function that would help check if she has the required sum of money.
//She spends or saves part of her money every day. If she wants to spend more than what she has then she would spend all of her money and wuold be left with 0. 
//Input: 1. Required money for the holiday; 2. The amount of money she has; and then we receive 'n' number of times type of action - "save" or "spend" and the sum which she would save or spend.
//Output: If 5 consecutive days she only spends money, the programme needs to print out:
//"You can't save the money."
//"{number of passed days}"
//If she manages to save the money then the programme prints out:
//"You saved the money for {number of passed days} days."

function holiday(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;

    let currentMoney = Number(input[index]);
    index++

    let command = input[index];
    index++;

    let spendCount = 0;
    let daysCount = 0;
    let currentAction = '';
    let moneyCount = 0;

    while (currentMoney < neededMoney) {
        if (index % 2 !== 0) {
            currentAction = command;
            daysCount++;
            if (command === "spend" && currentAction === "spend") {
                spendCount++;
                if (spendCount >= 5) {
                    console.log("You can't save the money.");
                    console.log(`${daysCount}`);
                    return;
                }
            } else {
                spendCount = 0;
            }
        }
        if (index % 2 === 0) {
            moneyCount = Number(command);
            if (currentAction === "spend") {
                if (moneyCount > currentMoney) {
                    currentMoney = 0;
                } else {
                    currentMoney -= moneyCount;
                }  
            } else {
                currentMoney += moneyCount;
            }
        }

        command = input[index];
        index++;    
    }

    console.log(`You saved the money for ${daysCount} days.`)
}

// holiday([
//     "2000",
//     "1000",
//     "spend",
//     "1200",
//     "save",
//     "2000"]);

holiday([
    "110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"]);

// holiday([
//     "250",
//     "150",
//     "spend",
//     "50",
//     "spend",
//     "50",
//     "save",
//     "100",
//     "save",
//     "100"]);
    

