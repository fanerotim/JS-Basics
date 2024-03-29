//Charity event the payments are always made in the following order: cash, card, cash, card etc.
//If a product costs more than 100lv, it cannot be paid for in cash.
//If a product costs less than 10lv, it cannot be paid for in card.
//The programme ends either after we receive command "End" or after the expected funds are collected.
//Input: 1.The sum of money, which we expect to collect. 2. 'n' number of prices of the items that would be purchased or the command "End"
//The programme must print out the following:
//For each successful transaction: "Product sold!"
//Each unsuccessful transaction: "Error in transaction!"
//If the sum of all purchased items exceeds the expected sum the programme needs to end and print out:
//o	"Average CS: {average payment in cash per person}"
//o	"Average CC: {average payment in card per person}" 
//The payments must be rounded to two decimal points
//If we receive the command end, we need to print out:
//o	"Failed to collect required money for charity."

function reportSystem(input) {
    let index = 0;

    let expectedSum = Number(input[index]);
    index++;

    let command = input[index];

    let cashPayment = 0;
    let cardPayment = 0;
    let collectedSumCash = 0;
    let collectedSumCard = 0;

    let collectedSum = 0;

    let isEnd = false;

    while (collectedSum < expectedSum) {
        if (command === "End") {
            isEnd = true;
            break;
        }

        let money = Number(command);
        if (index % 2 !== 0) {
            if (money > 100) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                collectedSum += money;
                collectedSumCash += money;
                cashPayment += 1;
            }
        } else {
            if (money < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                collectedSum += money;
                collectedSumCard += money;
                cardPayment += 1;
            }
        }
        index++;
        command = input[index];
    }

    if (isEnd) {
        if (collectedSum >= expectedSum) {
            console.log(`Average CS: ${(collectedSumCash / cashPayment).toFixed(2)}`);
            console.log(`Average CC: ${(collectedSumCard / cardPayment).toFixed(2)}`);
        } else {
            console.log("Failed to collect required money for charity.")
        }
    } else {
        console.log(`Average CS: ${(collectedSumCash / cashPayment).toFixed(2)}`);
        console.log(`Average CC: ${(collectedSumCard / cardPayment).toFixed(2)}`);
    }
}

// reportSystem([
//     "500",
//     "120",
//     "8",
//     "63",
//     "256",
//     "78",
//     "317"
// ])

// reportSystem([
//     "600",
//     "86",
//     "150",
//     "98",
//     "227",
//     "39",
//     "35",
//     "End"
// ])