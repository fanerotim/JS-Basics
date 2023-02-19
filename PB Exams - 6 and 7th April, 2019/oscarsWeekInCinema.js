function oscarsWeek(input) {
    let movieTitle = input[0];
    let hallType = input[1];
    let ticketCount = Number(input[2]);

    let ticketCost = 0;

    switch (movieTitle) {
        case "A Star Is Born":

            if (hallType === "normal") {
                ticketCost = 7.50;
            } else if (hallType === "luxury") {
                ticketCost = 10.50;
            } else if (hallType === "ultra luxury") {
                ticketCost = 13.50;
            }
            break;

        case "Bohemian Rhapsody":
            if (hallType === "normal") {
                ticketCost = 7.35;
            } else if (hallType === "luxury") {
                ticketCost = 9.45;
            } else if (hallType === "ultra luxury") {
                ticketCost = 12.75;
            }
            break;

        case "Green Book":
            if (hallType === "normal") {
                ticketCost = 8.15;
            } else if (hallType === "luxury") {
                ticketCost = 10.25;
            } else if (hallType === "ultra luxury") {
                ticketCost = 13.25;
            }
            break;

        case "The Favourite":
            if (hallType === "normal") {
                ticketCost = 8.75;
            } else if (hallType === "luxury") {
                ticketCost = 11.55;
            } else if (hallType === "ultra luxury") {
                ticketCost = 13.95;
            }
            break;
    }

    let totalCost = ticketCount * ticketCost;

    console.log(`${movieTitle} -> ${totalCost.toFixed(2)} lv.`)
}

oscarsWeek([
    "A Star Is Born",
    "luxury",
    "42"]);

oscarsWeek([
    "Green Book",
    "normal",
    "63"]);

oscarsWeek([
    "The Favourite",
    "ultra luxury",
    "34"]);


