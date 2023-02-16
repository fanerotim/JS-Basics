function gameNumberWars(input) {
    let index = 0;
    
    let firstPlayerName = input[index];
    index++;

    let secondPlayerName = input[index];
    index++;

    let command = input[index];
    index++;

    let playerOnePoints = 0;
    let playerTwoPoints = 0;

    while (command !== "End of game") {
        let playerOneCurrentPoints = Number(command);

        command = input[index];
        index++;

        let playerTwoCurrentPoints = Number(command);

        command = input[index];
        index++;

        if (playerOneCurrentPoints > playerTwoCurrentPoints) {
            playerOnePoints += playerOneCurrentPoints - playerTwoCurrentPoints;
        } else if (playerOneCurrentPoints < playerTwoCurrentPoints) {
            playerTwoPoints += playerTwoCurrentPoints - playerOneCurrentPoints;
        }

        if (playerOneCurrentPoints === playerTwoCurrentPoints) {
            console.log("Number wars!");

            playerOneCurrentPoints = Number(command);

            command = input[index];
            index++;

            playerTwoCurrentPoints = Number(command);

            if (playerOneCurrentPoints > playerTwoCurrentPoints) {
                console.log(`${firstPlayerName} is winner with ${playerOnePoints} points`);
                return;
            } else if (playerOneCurrentPoints < playerTwoCurrentPoints) {
                console.log(`${secondPlayerName} is winner with ${playerTwoPoints} points`);
                return;
            }
        }
    }

    console.log(`${firstPlayerName} has ${playerOnePoints} points`);
    console.log(`${secondPlayerName} has ${playerTwoPoints} points`);
}

gameNumberWars([
    "Desi",
    "Niki",
    "7",
    "5",
    "3",
    "4",
    "3",
    "3",
    "5",
    "3"]);

gameNumberWars([
    "Elena",
    "Simeon",
    "6",
    "3",
    "2",
    "5",
    "8",
    "9",
    "End of game"]);

gameNumberWars([
    "Aleks",
    "Georgi",
    "4",
    "5",
    "3",
    "2",
    "4",
    "3",
    "4",
    "4",
    "5",
    "2"]);


