function darts(input) {
    let index = 0;
    
    let playerName = input[index];
    index++;

    let command = input[index];
    index++;

    let startingPoints = 301;
    let currentPoints = 0;
    let shotsCounter = 0;
    let unsuccessfulShotsCounter = 0;
    let sector = '';

    while (command !== "Retire") {
        sector = command;

        command = input[index];
        index++;

        currentPoints = Number(command);

        if (sector === "Single") {
            currentPoints = currentPoints;
        } else if (sector === "Double") {
            currentPoints = currentPoints * 2;
        } else if (sector === "Triple") {
            currentPoints = currentPoints * 3;
        }
        
        if (currentPoints > startingPoints) {
            unsuccessfulShotsCounter++;

            command = input[index];
            index++;
            continue;
        }
        
        startingPoints -= currentPoints;
        shotsCounter++;
       
        command = input[index];
        index++;

        if (startingPoints === 0) {
            console.log(`${playerName} won the leg with ${shotsCounter} shots.`)
            return;
        }
    }
    console.log(`${playerName} retired after ${unsuccessfulShotsCounter} unsuccessful shots.`)
}

darts(
    ["Michael van Gerwen",
    "Triple",
    "20",
    "Triple",
    "19",
    "Double",
    "10",
    "Single",
    "3",
    "Single",
    "1",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20"]);

darts([
    "Stephen Bunting",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "7",
    "Single",
    "12",
    "Double",
    "1",
    "Single",
    "1"])

darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])



