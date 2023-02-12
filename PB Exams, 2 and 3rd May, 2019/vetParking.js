function vetParking(input) {
    let daysCount = Number(input[0]);
    let hoursCount = Number(input[1]);
    
    let parkingCost = 0;
    let totalDaysCount = 0;
    let totalCost  = 0;

    for (let i = 1; i <= daysCount; i++) {
        totalDaysCount++;
        for (let j = 1; j <= hoursCount; j++) {
            
            if (i % 2 !== 0 && j % 2 === 0) {
                parkingCost += 1.25;
            } else if (i % 2 === 0 && j % 2 !== 0) {
                parkingCost += 2.50;
            } else {
                parkingCost += 1;
            }
            
            if (j === hoursCount) {
                console.log(`Day: ${totalDaysCount} - ${parkingCost.toFixed(2)} leva`);
                totalCost += parkingCost;
                parkingCost = 0;
            }
        }
    }
    console.log(`Total: ${totalCost.toFixed(2)} leva`);
}

// vetParking(["2",
// "5"])

vetParking(["5",
"2"])
