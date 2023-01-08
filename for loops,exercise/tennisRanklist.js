//The main objective of a tennis player is to climb the world rank list of tennis for men.
//In one year he participates in a certain number of tournaments. In each tournament he receives points that depend
//on the rank he finished the tournament. We have three options:
//W (winner) - 2000 points, F (finalist) - 1200 points, SF (semi-finalist) 720 points.
//Write a programme which calculates how many points the tennis player would have after playing in all tournaments, by knowing how many points he starts the season with.
//Also based on all tournaments he plays, calculate his average points and finally what percentage of the tournaments he has won.
//We receive - number of tournaments the tennis player has played in and the points he starts with. For every tournament we on a new line we receive - W, F or SF.
//The average points need to be rounded to the closest smallest number and the percentage formated to two decimal places.


function tennisRanking(input) {
    let tournamentCount = Number(input[0])
    let startingPoints = Number(input[1]);

    let W = 2000;
    let F = 1200;
    let SF = 720;

    let pointsWon = 0;
    let winsCount = 0;

    for (let i = 2; i <= tournamentCount + 1; i++) {
        let positionCount = input[i];
        
        switch(positionCount) {
            case "W":
                pointsWon += 2000;
                winsCount += 1;
                break;
            case "F":
                pointsWon += 1200;
                break;
            case "SF":
                pointsWon += 720;
                break;
        }    
    }

    let totalPoints = startingPoints + pointsWon;
    let averagePoints = pointsWon / tournamentCount;
    let percentageTournamentsWon = (winsCount / tournamentCount) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentageTournamentsWon.toFixed(2)}%`);
}

// tennisRanking([
//     "5",
//     "1400",
//     "F",
//     "SF",
//     "W",
//     "W",
//     "SF"]);

// tennisRanking([
//     "4",
//     "750",
//     "SF",
//     "W",
//     "SF",
//     "W"]);

// tennisRanking([
//     "7",
//     "1200",
//     "SF",
//     "F",
//     "W",
//     "F",
//     "W",
//     "SF",
//     "W"]);
