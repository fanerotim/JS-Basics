function fitnessCenter(input) {
    let clientsCount = Number(input[0]);

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;

    let command = '';

    for (let i = 1; i < input.length; i++) {
        command = input[i];

        if (command === "Back") {
            back++;
        } else if (command === "Chest") {
            chest++;
        } else if (command === "Legs") {
            legs++;
        } else if (command === "Abs") {
            abs++;
        } else if (command === "Protein shake") {
            proteinShake++;
        } else if (command === "Protein bar") {
            proteinBar++;
        }  
    }

    let totalClients = back + chest + legs + abs + proteinBar + proteinShake;
    let clientsWhoWorkOut = back + chest + legs + abs;
    let clientsWhoBoughtProtein = proteinBar + proteinShake;

    let percentageTrainingClients = (clientsWhoWorkOut / totalClients) * 100;
    let percentageBoughtProtein = (clientsWhoBoughtProtein / totalClients) * 100;

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${percentageTrainingClients.toFixed(2)}% - work out`);
    console.log(`${percentageBoughtProtein.toFixed(2)}% - protein`)
}

// fitnessCenter(["10",
// "Back",
// "Chest",
// "Legs",
// "Abs",
// "Protein shake",
// "Protein bar",
// "Protein shake",
// "Protein bar",
// "Legs",
// "Abs"])

fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])
