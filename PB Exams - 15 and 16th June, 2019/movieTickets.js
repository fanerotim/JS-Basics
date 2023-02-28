function movieTickets(input) {
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    let symbolOne = '';

    let firstSymbol = '';
    let secondSymbol = 0;
    let thirdSymbol = 0;
    let fourthSymbol = 0;

    let endOfFirstInterval = a2 - 1;
    let endOfSecondInterval = n - 1;
    let endOfThirdInterval = n / 2 - 1;

    for (let i = a1; i <= endOfFirstInterval; i++) {
        symbolOne = i;
        if (symbolOne % 2 !== 0) {
            firstSymbol = String.fromCharCode(symbolOne);
        } else {
            continue;
        }
        for (let j = 1; j <= endOfSecondInterval; j++) {
            secondSymbol = j;
            for (let k = 1; k <= endOfThirdInterval; k++) {
                thirdSymbol = k;
                fourthSymbol = symbolOne;

                let sumOfLastThreeSymbols = secondSymbol + thirdSymbol + fourthSymbol;

                if (sumOfLastThreeSymbols % 2 !== 0) {
                    console.log(`${firstSymbol}-${secondSymbol}${thirdSymbol}${fourthSymbol}`)
                } else {
                    continue;
                }
                
            }
        }
    } 
}

// movieTickets([
//     "86",
//     "88",
//     "4"]);

// movieTickets([
//     "71",
//     "74",
//     "6"])

movieTickets([
    "69",
    "72",
    "4 "]);

