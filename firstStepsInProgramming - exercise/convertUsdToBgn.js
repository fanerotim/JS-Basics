//Write a function that converts USD to BGN. We know that current exchange rate is 1.79549

function moneyConverter(input) {
    let usd = Number(input[0]);
    let exchangeRate = 1.79549

    let bgn = usd * exchangeRate

    console.log(bgn)
}

// moneyConverter(["22"]);
// moneyConverter(["100"]);
// moneyConverter(["12.5"]);