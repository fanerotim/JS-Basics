function easterCompetition(input) {
    let index = 0;

    let easterBreadCount = Number(input[index]);
    index++;
    
    let command = input[index];
    index++;

    let breadCounter = 1;

    let chefName = '';

    let currentPoints = 0;
    let points = 0;

    while (breadCounter <= easterBreadCount) {
        currentChef = command;

        command = input[index];
        index++;

        while (command !== "Stop") {
            currentPoints += Number(command);

            command = input[index];
            index++;
        }

        console.log(`${currentChef} has ${currentPoints} points.`)
        
        if (currentPoints > points) {
            points = currentPoints;
            chefName = currentChef;
            console.log(`${currentChef} is the new number 1!`)
        }

        currentPoints = 0;
        command = input[index];
        index++;

        breadCounter++;
}

    console.log(`${chefName} won competition with ${points} points!`)
}

// easterCompetition([
//     "3",
//     "Chef Manchev", 
//     "10",
//     "10",
//     "10",
//     "10",
//     "Stop",
//     "Natalie",
//     "8",
//     "2",
//     "9",
//     "Stop",
//     "George",
//     "9",
//     "2",
//     "4",
//     "2",
//     "Stop"]);

easterCompetition([
    "2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"]);

