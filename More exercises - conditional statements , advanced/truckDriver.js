//Write a function which calculates how much monet a truck driver would make in one season. 
//One season is 4 months. Depending on the season and number of kilometers per month the driver would be paid different rate per killometerПролет/Есен	Лято	Зима
//                                  Пролет/Есен	        Лято	        Зима
// <= 5000	                        0.75 per km        0.90 per km	    1.05 per km
//More than 5000 and <= 10000	    0.95 per km        1.10 per km	    1.25 per km
//More than 10000 and <= 20000	            1.45 per km, for all seasons
//There is also 10% tax on the salary. 
//Input: 1. Season; 2.Kilometers per month;
// Output should be: The salary of the truck driver after the tax - rounded to two decimal points


function truckDriver(input) {
    let season = input[0];
    let kilometersPerMonth = Number(input[1]);

    let payPerKilometer = 0;

    switch(season) {
        case "Spring":
        case "Autumn":
            if (kilometersPerMonth <= 5000) {
                payPerKilometer = 0.75;
            } else if (kilometersPerMonth <= 10000) {
                payPerKilometer = 0.95;
            } else {
                payPerKilometer = 1.45;
            }
            break;
        case "Summer":
            if (kilometersPerMonth <= 5000) {
                payPerKilometer = 0.90;
            } else if (kilometersPerMonth <= 10000) {
                payPerKilometer = 1.10;
            } else {
                payPerKilometer = 1.45;
            }
            break;
        case "Winter":
            if (kilometersPerMonth <= 5000) {
                payPerKilometer = 1.05;
            } else if (kilometersPerMonth <= 10000) {
                payPerKilometer = 1.25;
            } else {
                payPerKilometer = 1.45;
            }
            break;
    }

    let grossPay = (kilometersPerMonth * payPerKilometer) * 4;
    let tax = grossPay * 0.10;

    console.log(`${(grossPay - tax).toFixed(2)}`)
}

// truckDriver([
//     "Summer",
//     "3455"
//     ]);

// truckDriver([
//     "Winter",
//     "4350"
//     ]);

// truckDriver([
//     "Winter",
//     "5678"
//     ]);

// truckDriver([
//     "Winter",
//     "16042"
//     ]);

// truckDriver([
//     "Spring",
//     "1600"
//     ]);

// truckDriver([
//     "Autumn",
//     "8600"
//     ]);

truckDriver([
    "Spring",
    "16942"
    ]);