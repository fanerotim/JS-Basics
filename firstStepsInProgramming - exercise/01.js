//This is a deposit calculator that figures out what sum you'd get at the end of a deposit period
// based on an interest fee percentage

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
