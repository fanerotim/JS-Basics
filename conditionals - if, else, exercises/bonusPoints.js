//We receive an integer - starting points. On top of it we add bonus points, based on certain conditions. Write a function that 
// calculates bonus points and the total points.
// if the number is up to 100, bonus points are 5. If greater than 100 bonus points are 20% of the starting points, and if greater than 1000
// bonus points = 10%.
// Additionally, if the points are even number - 1 bonus point, and if they are ending on 5 - 2 bonus points.

function bonusPoints(input) {
    let startingPoints = Number(input[0]);
    let bonusPoints = 0;

    if (startingPoints <= 100) {
        bonusPoints += 5;
    } else if (startingPoints > 100 && startingPoints < 1000) {
        bonusPoints += (startingPoints * 0.20);
    } else if (startingPoints > 1000) {
        bonusPoints += (startingPoints * 0.10);
    }

    if (startingPoints % 2 === 0) {
        bonusPoints += 1;
    } else if (startingPoints % 10 === 5) {
        bonusPoints += 2;
    }

    console.log(bonusPoints)
    console.log(bonusPoints + startingPoints);
}

// bonusPoints(["20"]);
// bonusPoints(["175"]);
// bonusPoints(["2703"]);
// bonusPoints(["15875"]);