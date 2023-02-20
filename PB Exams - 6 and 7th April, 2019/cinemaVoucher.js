function cinemaVoucher(input) {
    let index = 0;

    let voucherAmount = input[index];
    index++;

    let command = input[index];
    index++;

    let spentMoney = 0;
    let currentProduct = 0;
    let ticketsCounter = 0;
    let otherProductsCounter = 0;

    while (command !== "End") {
        currentProduct = command.length;

        if (currentProduct > 8) {
            spentMoney += command.charCodeAt(0) + command.charCodeAt(1);

            if (spentMoney > voucherAmount) {
                break;
            } else {
                ticketsCounter++;
            }
        } else if (currentProduct <= 8) {
            spentMoney += command.charCodeAt(0);

            if (spentMoney > voucherAmount) {
                break;
            } else {
                otherProductsCounter++;
            }
        }
        command = input[index];
        index++;
    }

    console.log(`${ticketsCounter}`);
    console.log(`${otherProductsCounter}`);
}

// cinemaVoucher([
//     "300",
//     "Captain Marvel",
//     "popcorn",
//     "Pepsi"]);

cinemaVoucher([
    "1500",
    "Avengers: Endgame",
    "Bohemian Rhapsody",
    "Deadpool 2",
    "End"]);