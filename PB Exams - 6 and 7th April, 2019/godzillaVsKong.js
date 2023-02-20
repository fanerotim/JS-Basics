function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let walkOnCount = Number(input[1]);
    let dressCost = Number(input[2]);
    let decor = budget * 0.10;

    if (walkOnCount > 150) {
        dressCost -= dressCost * 0.10;
    }

    let totalPrice = (walkOnCount * dressCost) + decor;

    if (totalPrice > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`)
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`)
    }
}

// godzillaVsKong([
//     "20000", 
//     "120",
//     "55.5"]);

// godzillaVsKong([
//     "15437.62",
//     "186",
//     "57.99"]);

godzillaVsKong([
    "9587.88",
    "222",
    "55.68"]);


