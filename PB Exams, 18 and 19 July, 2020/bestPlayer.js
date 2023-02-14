function bestPlayer(input) {
    let index = 0;
    
    let command = input[index];
    index++;

    let counter = 0;

    let playerName = '';
    let score = 0

    let currentPlayerName = '';
    let currentScore = 0;
    let hatTrick = 0;

    while (command !== "END") {
        counter++;

        if (counter % 2 !== 0) {
            currentPlayerName = command;
        } else if (counter % 2 === 0) {
            currentScore = Number(command);
            counter = 0;
        }

        if (currentScore > score) {
            score = currentScore;
            playerName = currentPlayerName;
            if (currentScore >= 3) {
                hatTrick++;
            }
        }

        if (currentScore >= 10) {
            console.log(`${playerName} is the best player!`)
            console.log(`He has scored ${score} goals and made a hat-trick !!!`)
            return;
        }

        command = input[index];
        index++;
        
    }

    console.log(`${playerName} is the best player!`)
    if (hatTrick >= 1) {
        console.log(`He has scored ${score} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${score} goals.`) 
    }

}

// bestPlayer([
//     "Neymar", 
//     "2",
//     "Ronaldo",
//     "1",
//     "Messi",
//     "3",
//     "END"]);

// bestPlayer([
//     "Silva",
//     "5",
//     "Harry Kane",
//     "10"]);

// bestPlayer([
//     "Rooney",
//     "1",
//     "Junior",
//     "2",
//     "Paolinio",
//     "2",
//     "END"])

// bestPlayer([
//     "Petrov",
//     "2",
//     "Drogba",
//     "11"])

// bestPlayer([
//     "Zidane",
//     "1",
//     "Felipe",
//     "2",
//     "Johnson",
//     "4",
//     "END"])




