function fitnessCard(input) {
    let budget = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let monthlyFee = 0;

    switch(sport) {
        case "Gym":
            if (gender === "m") {
                monthlyFee = 42;
            } else {
                monthlyFee = 35;
            }
            break;
        case "Boxing":
            if (gender === "m") {
                monthlyFee = 41;
            } else {
                monthlyFee = 37;
            }
            break;
        case "Yoga":
            if (gender === "m") {
                monthlyFee = 45;
            } else {
                monthlyFee = 42;
            }
            break;
        case "Zumba":
            if (gender === "m") {
                monthlyFee = 34;
            } else {
                monthlyFee = 31;
            }
            break;
        case "Dances":
            if (gender === "m") {
                monthlyFee = 51;
            } else {
                monthlyFee = 53
            }
            break;
        case "Pilates":
            if (gender === "m") {
                monthlyFee = 39;
            } else {
                monthlyFee = 37;
            }
            break;
    }

    if (age <= 19) {
        monthlyFee -= monthlyFee * 0.20;
    }

    if (budget >= monthlyFee) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        console.log(`You don't have enough money! You need $${(monthlyFee - budget).toFixed(2)} more.`)
    }
}

fitnessCard([
    "50",
    "m",
    "23",
    "Gym"
    ])

fitnessCard(["20",
"f",
"15",
"Yoga"])

fitnessCard(["10",
"m",
"50",
"Pilates"])
