function easterShop(input) {
    let index = 0;

    let startingAmountEggs = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let currentCommand = '';
    let soldEggs = 0;

    while (command !== "Close") {
        if (index % 2 === 0) {
            currentCommand = command;
        }

        command = input[index];
        index++;

        let currentEggs = Number(command);

        if (currentCommand === "Fill") {
            startingAmountEggs += currentEggs;   
        }

        if (currentCommand === "Buy") {
            if (currentEggs > startingAmountEggs) {
                console.log("Not enough eggs in store!");
                console.log(`You can buy only ${startingAmountEggs}.`);
                return;
            } else {
                startingAmountEggs -= currentEggs;
                soldEggs += currentEggs;
            }
    }

        command = input[index];
        index++; 
}

    console.log("Store is closed!");
    console.log(`${soldEggs} eggs sold.`)
}

easterShop([
    "13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"])

easterShop([
    "20",
    "Fill",
    "30",
    "Buy",
    "15",
    "Buy",
    "20",
    "Close"])
