//Write a function that calculates the results of a game. First we receive a number that tells us how many turns the game would have.
//Then for each new turn of the game we would be receiving a new number. New points are added according to the interval in which the new number falls. 
//If the number if negative or greater than 50, it is invalid. At the beginning of the game the reuslt is 0 and new points are added each turn, as follows:
// from 0 to 9 - 20% of the number
// from 10 to 19 -30% of the number
// from 20 to 29 - 40% of the number
// from 30 to 39 - 50 points
// from 40 to 50 - 100 points
// Invalid - result is devided by 2
//Apart from the result the programme needs to print out statistics of percentage of numbers in the different intervals
//We receive: 1. The number of turns in the game; 2. The numbers which we need to check and add to the correct interval


function gameOfIntervals(input) {
    let turns = Number(input[0]);

    let score = 0;

    let firstInterval = 0;
    let secondInterval = 0;
    let thirdInterval = 0;
    let fourthInterval = 0;
    let fifthInterval = 0;
    let invalid = 0;

    for (let i = 1; i <= turns; i++) {
        let points = input[i];
        
        if (points >= 0 && points <= 9) {
            firstInterval += 1;
            score += points * 0.2;
        } else if (points >= 0 && points <= 19) {
            secondInterval += 1;
            score += points * 0.3;
        } else if (points >= 0 && points <= 29) {
            thirdInterval += 1;
            score += points * 0.4;
        } else if (points >= 0 && points <= 39) {
            fourthInterval += 1;
            score += 50;
        } else if (points >= 0 && points <= 50) {
            fifthInterval += 1;
            score += 100;
        } else {
            invalid += 1;
            score = score / 2;
        }
    }

    let sumOfIntervals = firstInterval + secondInterval + thirdInterval + fourthInterval + fifthInterval + invalid;

    console.log(`${(score).toFixed(2)}`)
    console.log(`From 0 to 9: ${((firstInterval / sumOfIntervals) * 100).toFixed(2)}%`)
    console.log(`From 10 to 19: ${((secondInterval / sumOfIntervals) * 100).toFixed(2)}%`)
    console.log(`From 20 to 29: ${((thirdInterval / sumOfIntervals) * 100).toFixed(2)}%`)
    console.log(`From 30 to 39: ${((fourthInterval / sumOfIntervals) * 100).toFixed(2)}%`)
    console.log(`From 40 to 50: ${((fifthInterval / sumOfIntervals) * 100).toFixed(2)}%`)
    console.log(`Invalid numbers: ${((invalid / sumOfIntervals) * 100).toFixed(2)}%`)
}

gameOfIntervals([
    "10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20"
])