function basketballTournament(input) {
    let index = 0;

    let tournamentName = input[index];
    index++; 

    let gamesCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let desiTeam = 0;
    let otherTeam = 0;

    let currentGame = 0;

    let lost = 0;
    let won = 0;
    let totalGames = 0;

    while (command !== "End of tournaments") {

        if (currentGame === gamesCount) {
            tournamentName = command;
            
            command = input[index];
            index++;

            gamesCount = Number(command);

            command = input[index];
            index++;
        }

        currentGame = 0;

        while (currentGame < gamesCount) {
            desiTeam = Number(command);

            command = input[index];

            otherTeam = Number(command);
            index++;
            currentGame++;

            if (desiTeam > otherTeam) {
                console.log(`Game ${currentGame} of tournament ${tournamentName}: win with ${desiTeam - otherTeam} points.`)
                won++;
            } else {
                console.log(`Game ${currentGame} of tournament ${tournamentName}: lost with ${otherTeam - desiTeam} points.`)
                lost++;
            }
            totalGames++;

            command = input[index];
            index++;
        }
    }

    let percentageWins = (won / totalGames) * 100;
    let percentageLosses = (lost / totalGames) * 100;

    console.log(`${percentageWins.toFixed(2)}% matches win`);
    console.log(`${percentageLosses.toFixed(2)}% matches lost`)
}

// basketballTournament([
//     "Dunkers",
//     "2",
//     "75",
//     "65",
//     "56",
//     "73",
//     "Fire Girls",
//     "3",
//     "67",
//     "34",
//     "83",
//     "98",
//     "66",
//     "45",
//     "End of tournaments"])

basketballTournament([
    "Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"])



