function footbalTournament(input) {
    let teamName = input[0];
    let gamesCount = Number(input[1]);
    
    let currentGame = '';

    let winsCounter = 0;
    let drawsCounter = 0;
    let losesCounter = 0;

    for (let i = 1; i < input.length; i++) {
        currentGame = input[i];
        
        if (currentGame === "W") {
            winsCounter++
        } else if (currentGame === "D") {
            drawsCounter++;
        } else if (currentGame === "L") {
            losesCounter++;
        }
    }

    let totalPoints = (winsCounter * 3) + (drawsCounter * 1);

    if (gamesCount === 0) {
        console.log(`${teamName} hasn't played any games during this season.`)
    } else {
        console.log(`${teamName} has won ${totalPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${winsCounter}`);
        console.log(`## D: ${drawsCounter}`);
        console.log(`## L: ${losesCounter}`);
        console.log(`Win rate: ${(winsCounter / gamesCount * 100).toFixed(2)}%`)
    }
}

// footbalTournament([
//     "Liverpool",
//     "10",
//     "W",
//     "D",
//     "D",
//     "W",
//     "L",
//     "W",
//     "D",
//     "D",
//     "W",
//     "W"
//     ]);

// footbalTournament([
//     "Barcelona",
//     "7",
//     "W",
//     "D",
//     "L",
//     "L",
//     "W",
//    "W",
//     "D"
//     ]);

footbalTournament([
    "Chelsea",
    "0"
    ])