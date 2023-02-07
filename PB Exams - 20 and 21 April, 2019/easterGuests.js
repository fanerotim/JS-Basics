function easterGuests(input) {
    let guestsCount = Number(input[0]);
    let budget = Number(input[1]);

    let easterBreadPrice = 4;
    let eggPrice = 0.45;

    let easterBreadCount = Math.ceil(guestsCount / 3);
    let eggsCount = guestsCount * 2;

    let totalPrice = (easterBreadCount * easterBreadPrice) + (eggsCount * eggPrice);
    
    if (budget >= totalPrice) {
        console.log(`Lyubo bought ${easterBreadCount} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${(budget - totalPrice).toFixed(2)} lv. left.`);
    } else {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${(totalPrice - budget).toFixed(2)} lv. more.`)
    }

}

// easterGuests([
//     "10",
//     "35"])

easterGuests(["9",
"12"])
