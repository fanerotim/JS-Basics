function nameGame(input) {
    let index = 0;

    let command = input[index];
    index++;

    let playerName = '';

    let currentNum = 0;
    let currentLetter = '';

    let totalPoints = 0;
    let winnerName = '';

    let currentPoints = 0;

    while (command !== "Stop") {
        playerName = command;

        command = input[index];
        index++;

        for (let i = 0; i < playerName.length; i++) {
            currentNum = Number(command)

            currentLetter = playerName.charCodeAt(i);

            if (currentNum === currentLetter) {
                currentPoints += 10;
            } else {
                currentPoints += 2;
              
            }
            
            command = input[index];
            index++;  
        }

        if (currentPoints >= totalPoints) {
            totalPoints = currentPoints;
            winnerName = playerName;
        }
        currentPoints = 0;
    }

    console.log(`The winner is ${winnerName} with ${totalPoints} points!`)
}

// nameGame([
//     "Ivan",
//     "73",
//     "20",
//     "98",
//     "110",
//     "Ivo",
//     "80",
//     "65",
//     "87",
//     "Stop"
// ])

nameGame([
    "Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"])
