function mobileOperator(input) {
    let contractLength = input[0];
    let contractType = input[1];
    let mobileData = input[2];
    let monthsCount = Number(input[3]);

    let cost = 0;

    switch (contractType) {
        case "Small":
            if (contractLength === "one") {
                cost = 9.98;
            } else if (contractLength === "two") {
                cost = 8.58;
            }
            break;

        case "Middle":
            if (contractLength === "one") {
                cost = 18.99;
            } else if (contractLength === "two") {
                cost = 17.09;
            }
            break;

        case "Large":
            if (contractLength === "one") {
                cost = 25.98;
            } else if (contractLength === "two") {
                cost = 23.59;
            }
            break;

        case "ExtraLarge":
            if (contractLength === "one") {
                cost = 35.99;
            } else if (contractLength === "two") {
                cost = 31.79;
            }
            break;
    }

    let mobileDataCost = 0;

    if (mobileData === "yes") {
        if (cost <= 10) {
            mobileDataCost = 5.50;
        } else if (cost <= 30) {
            mobileDataCost = 4.35;
        } else if (cost > 30) {
            mobileDataCost = 3.85;
        }
    }

    let totalCost = monthsCount * (cost + mobileDataCost);

    if (contractLength === "two") {
        totalCost -= totalCost * 0.0375;
    }

    console.log(`${totalCost.toFixed(2)} lv.`);
}

// mobileOperator([
//     "one",
//     "Small",
//     "yes",
//     "10"])

// mobileOperator([
//     "two",
//     "Large",
//     "no",
//     "10"])

mobileOperator([
    "two",
    "ExtraLarge",
    "yes",
    "20"])

// mobileOperator([
//     "two",
//     "Small",
//     "yes",
//     "20"])
