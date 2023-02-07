function easterEggsBattle(input) {
    let index = 0;

    let playerOne = Number(input[index]);
    index++;

    let playerTwo = Number(input[index]);;
    index++;

    let command = input[index];
    index++;

    while (command !== "End") {
        if (command === "one") {
            playerTwo--;
        } else if (command ==="two") {
            playerOne--;
        }

        if (playerOne === 0) {
            console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
            return;
        } else if (playerTwo === 0) {
            console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
            return;
           
        }

        command = input[index];
        index++;
    }

    console.log(`Player one has ${playerOne} eggs left.`);
    console.log(`Player two has ${playerTwo} eggs left.`)
}

// easterEggsBattle([
//     "5",
//     "4",
//     "one",
//     "two",
//     "one",
//     "two",
//     "two",
//     "End"
//     ])

// easterEggsBattle([
//     "2",
//     "6",
//     "one",
//     "two",
//     "two"
//     ])

easterEggsBattle([
    "6",
    "3",
    "one",
    "two",
    "two",
    "one",
    "one"
    ])