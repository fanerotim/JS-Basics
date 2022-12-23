function depositCalculator(input) {
    let depositedAmount = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let yearlyInterest = Number(input[2]);

    let yearlyInterestPercentage = yearlyInterest / 100;

    let sum = depositedAmount + depositPeriod * ((depositedAmount * yearlyInterestPercentage) / 12)

    console.log(sum);
}

depositCalculator([
    "2350",
    "6 ",
    "7 "])