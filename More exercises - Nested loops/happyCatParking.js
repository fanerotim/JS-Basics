//Desi needs to bring her cat to the vet, but the parking is paid. Write a programme that calculates how much in total Desi needs to pay for parking. 
//In an even day and odd hour - the cost is 2.50. In an odd day and even hour - cost is 1.25. All other cases, it costs 1. 
//Each of the outputs needs to be roudned to second decimal point. 
//Input: 1. Number of days; 2.Number of hours for each of the days

function happyCat(input) {
    let daysCount = Number(input[0]);
    let hoursCount = Number(input[1]);

    let totalSum = 0;
    let dailySum = 0;

    let dayCounter = 0;
    let isDayEnded = false;

    for (let day = 1; day <= daysCount; day++) {

        dayCounter++;
        isDayEnded = false;

        for (let hour = 1; hour <= hoursCount; hour++) {

            if (day % 2 === 0) {
                if (hour % 2 !== 0) {
                    dailySum += 2.50;
                } else {
                    dailySum += 1;
                }
            }

            if (day % 2 !== 0) {
                if (hour % 2 === 0) {
                    dailySum += 1.25
                } else {
                    dailySum += 1;
                }
            }

            if (dayCounter > 0) {
                isDayEnded = true;
            }  
        }

        if (isDayEnded) {
            console.log(`Day: ${dayCounter} - ${dailySum.toFixed(2)} leva`)
            
            totalSum += dailySum;
            dailySum = 0;  
        }
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

// happyCat([
//     "2",
//     "5"
//     ])

happyCat([
    "5",
    "2"
    ])