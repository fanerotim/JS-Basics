function paintingEggs(input) {
    let eggSize = input[0];
    let eggColor = input[1];
    let eggCount = Number(input[2]);

    let eggPrice = 0;

    switch(eggSize) {

        case "Large":

            if (eggColor === "Red") {
                eggPrice = 16
            } else if (eggColor === "Green") {
                eggPrice = 12;
            } else if (eggColor === "Yellow") {
                eggPrice = 9;
            }
            break;

        case "Medium":

        if (eggColor === "Red") {
            eggPrice = 13;
        } else if (eggColor === "Green") {
            eggPrice = 9;
        } else if (eggColor === "Yellow") {
            eggPrice = 7;
        }
            break;

        case "Small":

        if (eggColor === "Red") {
            eggPrice = 9;
        } else if (eggColor === "Green") {
            eggPrice = 8;
        } else if (eggColor === "Yellow") {
            eggPrice = 5;
        }
            break;
    }

    let totalPrice = eggCount * eggPrice;
    let expenses = totalPrice * 0.35;
    totalPrice -= expenses;

    console.log(`${totalPrice.toFixed(2)} leva.`);
    
}

paintingEggs([
    "Large",
    "Red",
    "7"]);

paintingEggs([
    "Medium",
    "Green",
    "5"]);

paintingEggs([
    "Small",
    "Yellow",
    "3"]);


