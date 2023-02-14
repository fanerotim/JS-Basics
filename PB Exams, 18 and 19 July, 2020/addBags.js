function addBags(input) {
    let pricePerBag = Number(input[0]);
    let kilosPerBag = Number(input[1]);
    let daysToFlight = Number(input[2]);
    let bagsCount = Number(input[3]);

    let feePerBag = 0;

    if (kilosPerBag < 10) {
        feePerBag += pricePerBag * 0.20;
    } else if (kilosPerBag <= 20) {
        feePerBag += pricePerBag * 0.50;
    } else {
        feePerBag = pricePerBag;
    }

    if (daysToFlight < 7) {
        feePerBag += feePerBag * 0.40;
    } else if (daysToFlight >= 7 && daysToFlight <= 30) {
        feePerBag += feePerBag * 0.15;
    } else {
        feePerBag += feePerBag * 0.10;
    }

    let totalCost = feePerBag * bagsCount;

    console.log(`The total price of bags is: ${totalCost.toFixed(2)} lv.`);

}

addBags([
    "30",
    "18",
    "15",
    "2"]);

addBags([
    "25.50",
    "5",
    "36",
    "6"])

addBags([
    "63.80",
    "23",
    "3",
    "1"])


