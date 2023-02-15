function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let winsCounter = 0;
    let tournamentPointsWon = 0;
    
    for (let i = 2; i < input.length; i++) {
        let currentTournament = input[i];

        if (currentTournament === "W") {
            tournamentPointsWon += 2000;
            winsCounter++;
        } else if (currentTournament === "F") {
            tournamentPointsWon += 1200;
        } else if (currentTournament === "SF") {
            tournamentPointsWon += 720;
        }   
    }

    let averagePoints = Math.floor(tournamentPointsWon / tournamentsCount);
    let winsPercentage = (winsCounter / tournamentsCount) * 100

    console.log(`Final points: ${startingPoints + tournamentPointsWon}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winsPercentage.toFixed(2)}%`)
}

// tennisRanklist([
//     "5",
//     "1400",
//     "F",
//     "SF",
//     "W",
//     "W",
//     "SF"])

// tennisRanklist([
//     "4",
//     "750",
//     "SF",
//     "W",
//     "SF",
//     "W"]);

// tennisRanklist([
//     "7",
// "1200",
// "SF",
// "F",
// "W",
// "F",
// "W",
// "SF",
// "W"])

