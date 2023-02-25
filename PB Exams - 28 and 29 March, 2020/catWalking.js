function catWalking(input) {
    let minutesWalk = Number(input[0]);
    let walksCount = Number(input[1]);
    let caloriesCount = Number(input[2]);

    let totalMinutesWalk = minutesWalk * walksCount;
    let totalCaloriesBurnt = totalMinutesWalk * 5;
    
    if (totalCaloriesBurnt >= caloriesCount / 2) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurnt}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurnt}.`)
    }
}

// catWalking(["30", "3", "600"]);
// catWalking(["15", "2", "500"]);
catWalking(["40", "2", "300"]);