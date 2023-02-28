function movieStars(input) {
    let index = 0;

    let budget = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let currentPay = 0;

    while (command !== "ACTION") {
        let currentCommand = command.length;
        if (currentCommand > 15) {
            currentPay = budget * 0.20;

            if (budget < currentPay) {
                break;
            } else {
                budget -= currentPay;
            }

        } else if (currentCommand <= 15) {
            command = input[index];
            index++

            if (budget < Number(command)) {
                budget -= Number(command);
                break;
            } else {
                budget -= Number(command);
            }
        }
        command = input[index];
        index++;
    }

    if (budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`)
    } else {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`)
    }
}

movieStars([
    "90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99"]);

movieStars([
    "170000",
    "Ben Affleck",
    "40000.50",
    "Zahari Baharov",
    "80000",
    "Tom Hanks",
    "2000.99",
    "ACTION"]);
