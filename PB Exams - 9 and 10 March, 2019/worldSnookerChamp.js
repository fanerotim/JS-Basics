function worldSnookerChamp(input) {
    let championshipStage = input[0];
    let ticketType = input[1];
    let ticketCount = Number(input[2]);
    let pictures = input[3];

    let ticketCost = 0;
    
    switch (championshipStage) {
        case "Quarter final":
            if (ticketType === "Standard") {
                ticketCost = 55.50;
            } else if (ticketType === "Premium") {
                ticketCost = 105.20;
            } else if (ticketType === "VIP") {
                ticketCost = 118.90;
            }
            break;

        case "Semi final":
            if (ticketType === "Standard") {
                ticketCost = 75.88;
            } else if (ticketType === "Premium") {
                ticketCost = 125.22;
            } else if (ticketType === "VIP") {
                ticketCost = 300.40;
            }
            break;

        case "Final":
            if (ticketType === "Standard") {
                ticketCost = 110.10;
            } else if (ticketType === "Premium") {
                ticketCost = 160.66;
            } else if (ticketType === "VIP") {
                ticketCost = 400;
            }
            break;    
    }

    let totalPrice = ticketCount * ticketCost;
    let isLess = false;

    if (totalPrice <= 4000) {
        isLess = true;
    }

    if (totalPrice > 2500 && totalPrice <= 4000) {
        totalPrice -= totalPrice * 0.10;
    } else if (totalPrice > 4000) {
        totalPrice -= totalPrice * 0.25;
    }

    if (pictures === "Y" && isLess === true) {
        let pictureCost = ticketCount * 40;
        totalPrice += pictureCost
    }

    console.log(totalPrice.toFixed(2))
}

worldSnookerChamp([
    "Final",
    "Premium",
    "25",
    "Y"])

worldSnookerChamp([
    "Semi final",
    "VIP",
    "9",
    "Y"]);

worldSnookerChamp([
    "Quarter final",
    "Standard",
    "11",
    "N"]);


