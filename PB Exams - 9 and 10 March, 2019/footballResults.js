function footballResults(input) {
    let firstGameResults = input[0];
    let secondGameResults = input[1];
    let thirdGameResults = input[2];

    let scoreTeamOne = Number(firstGameResults[0]);
    let scoreTeamTwo = Number(firstGameResults[2]);

    let teamOneWins = 0;
    let teamOneLosses = 0;
    let draws = 0;

    if (scoreTeamOne > scoreTeamTwo) {
        teamOneWins++;
    } else if (scoreTeamOne === scoreTeamTwo) {
        draws++;
    } else if (scoreTeamOne < scoreTeamTwo) {
        teamOneLosses++;
    }

    let teamOneSecondGame = Number(secondGameResults[0]);
    let teamTwoSecondGame = Number(secondGameResults[2]);

    if (teamOneSecondGame > teamTwoSecondGame) {
        teamOneWins++;
    } else if (teamOneSecondGame === teamTwoSecondGame) {
        draws++;
    } else if (teamOneSecondGame < teamTwoSecondGame) {
        teamOneLosses++;
    }

    let teamOneThirdGame = Number(thirdGameResults[0]);
    let teamTwoThirdGame = Number(thirdGameResults[2]);

    if (teamOneThirdGame > teamTwoThirdGame) {
        teamOneWins++;
    } else if (teamOneThirdGame === teamTwoThirdGame) {
        draws++;
    } else if (teamOneThirdGame < teamTwoThirdGame) {
        teamOneLosses++;
    }

    console.log(`Team won ${teamOneWins} games.`);
    console.log(`Team lost ${teamOneLosses} games.`)
    console.log(`Drawn games: ${draws}`)

}

// footballResults([
//     "3:1",
//     "0:2",
//     "0:0"]);

// footballResults([
//     "4:2",
//     "0:3",
//     "1:0"]);

footballResults([
    "0:2",
    "0:1",
    "3:3"]);


