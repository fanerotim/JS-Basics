function suitcasesLoad(input) {
    let index = 0;

    let totalCapacity = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let currentCapacity = 0;
    
    let counter = 0;
    let totalCounter = 0;

    let currentSuitcase = 0;

    while (command !== "End") {
        currentSuitcase = Number(command);  
        counter++;

        if (counter === 3) {
            currentSuitcase += currentSuitcase * 0.10;
            counter = 0;
        } else {
            currentCapacity += currentSuitcase;
        }

        if (totalCapacity < currentSuitcase) {
            console.log("No more space!")
            break;
        }

        totalCapacity -= currentSuitcase;

        totalCounter++; 
        command = input[index];
        index++;    
    }

    if (command === "End") {
        console.log("Congratulations! All suitcases are loaded!")
    }

    console.log(`Statistic: ${totalCounter} suitcases loaded.`)
}

// suitcasesLoad([
//     "550",
//     "100",
//     "252",
//     "72",
//     "End"])

suitcasesLoad([
    "700.5",
    "180",
    "340.6",
    "126",
    "220"])

// suitcasesLoad([
//     "1200.2",
//     "260",
//     "380.5",
//     "125.6",
//     "305",
//     "End"])

    