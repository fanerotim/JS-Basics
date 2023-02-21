function tournamentOfChristmas(input) {
    let index = 0;

    let daysCounter = Number(input[index]);
    index++;

    let currentDay = 0;

    let command = (input[index]);
    index++;

    let winCounter = 0;
    let loseCounter = 0;

    let finalWinCounter = 0;
    let finalLoseCounter = 0;

    let wonMoney = 0;
    let wonMoneyToday = 0;

    while (currentDay < daysCounter) {

        if (command === "Finish") {


            wonMoneyToday += winCounter * 20;
            finalWinCounter += winCounter;
            finalLoseCounter += loseCounter;
    
            if (winCounter > loseCounter) {
                wonMoneyToday += wonMoneyToday * 0.10;
            }
            wonMoney += wonMoneyToday;
            
            wonMoneyToday = 0;
            winCounter = 0;
            loseCounter = 0;
    
            currentDay++;

            if (currentDay === daysCounter) {
                break;
            } else {
                command = input[index];
                index++;
            }
            
        }

        while (command !== "Finish") {
            if (command === "win") {
                winCounter++;
            } else if (command === "lose") {
                loseCounter++;
            }
            command = input[index];
            index++
            continue;
        }

    }

    if (finalWinCounter > finalLoseCounter) {
        wonMoney += wonMoney * 0.20;
        console.log(`You won the tournament! Total raised money: ${wonMoney.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${wonMoney.toFixed(2)}`)
    }
}

// tournamentOfChristmas([
//     "2",
//     "volleyball",
//     "win",
//     "football",
//     "lose",
//     "basketball",
//     "win",
//     "Finish",
//     "golf",
//     "win",
//     "tennis",
//     "win",
//     "badminton",
//     "win",
//     "Finish"]);

tournamentOfChristmas([
            "3",
            "darts",
            "lose",
            "handball",
            "lose",
            "judo",
            "win",
            "Finish",
            "snooker",
            "lose",
            "swimming",
            "lose",
            "squash",
            "lose",
            "table tennis",
            "win",
            "Finish",
            "volleyball",
            "win",
            "basketball",
            "win",
            "Finish"])