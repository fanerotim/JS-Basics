//Write a programme which calculates the average amount of monthly expenses of a family for a certain period of time. Each month their bills are:
//Electricity - differs (it would be provided in the input), Water - 20, Internet - 15, Other - add electricity bill + water + internet and add 20% of this sum on top of it. 
// We need to calculate how much money the family paid for each expense for a certain period of time (provide in the input)
//Input - 1. The number of months for which we are calculating the average expenses; 2. The electricity bill for each month of the period.  

function bills(input) {
    let months = Number(input[0]);

    let electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;

    for (let i = 1; i <= months; i++) {
        let expenses = Number(input[i]);
        electricity += expenses;
        water += 20;
        internet += 15;
    }

    other += (electricity + water + internet) + ((electricity + water + internet) * 0.20);
    let averageExpense = (electricity + water + internet + other) / months;

    console.log(`Electricity: ${(electricity.toFixed(2))} lv`);
    console.log(`Water: ${(water).toFixed(2)} lv`);
    console.log(`Internet: ${(internet.toFixed(2))} lv`);
    console.log(`Other: ${(other).toFixed(2)} lv`);
    console.log(`Average: ${(averageExpense).toFixed(2)} lv`)
}

// bills([
//     "5",
//     "68.63",
//     "89.25",
//     "132.53",
//     "93.53",
//     "63.22"
// ]);

bills([
    "8",
    "123.54",
    "231.54",
    "140.23",
    "100",
    "122.4",
    "430",
    "178.52",
    "64.2"  
]);