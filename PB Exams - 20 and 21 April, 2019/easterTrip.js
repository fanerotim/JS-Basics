function easterTrip(input) {
    let destination = input[0];
    let dates = input[1];
    let nightsCount = Number(input[2]);

    let pricePerNight = 0;

    switch(destination) {
        case "France":

        if (dates === "21-23") {
            pricePerNight = 30;
        } else if (dates === "24-27") {
            pricePerNight = 35;
        } else if (dates === "28-31") {
            pricePerNight = 40;
        }
            break;
        case "Italy":

        if (dates === "21-23") {
            pricePerNight = 28;
        } else if (dates === "24-27") {
            pricePerNight = 32;
        } else if (dates === "28-31") {
            pricePerNight = 39;
        }
            break;
        case "Germany":

        if (dates === "21-23") {
            pricePerNight = 32;
        } else if (dates === "24-27") {
            pricePerNight = 37;
        } else if (dates === "28-31") {
            pricePerNight = 43;
        }
            break;
    }

    let finalCost = (nightsCount) * pricePerNight;
    console.log(`Easter trip to ${destination} : ${finalCost.toFixed(2)} leva.`);
}

easterTrip([
    "Germany",
    "24-27",
    "5"]);

easterTrip([
    "Italy",
    "21-23",
    "7"])

easterTrip([
    "France",
    "28-31",
    "8"]);


