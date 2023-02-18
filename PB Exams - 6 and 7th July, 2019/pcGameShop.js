function pcGameShop(input) {
    let numerOfGames = Number(input[0]);

    let currentGame = '';

    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 1; i < input.length; i++) {
        currentGame = input[i];
        
        if (currentGame === "Hearthstone") {
            hearthstone++;
        } else if (currentGame === "Fornite") {
            fornite++
        } else if (currentGame === "Overwatch") {
            overwatch++;
        } else {
            others++;
        }
    }

    console.log(`Hearthstone - ${(hearthstone / numerOfGames * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(fornite / numerOfGames * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatch / numerOfGames * 100).toFixed(2)}%`);
    console.log(`Others - ${(others / numerOfGames * 100).toFixed(2)}%`)
}

// pcGameShop([
//     "4",
//     "Hearthstone",
//     "Fornite",
//     "Overwatch",
//     "Counter-Strike"
//     ]);

pcGameShop([
    "3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"
    ]);
