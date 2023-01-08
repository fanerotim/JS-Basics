//Find out how much would cost Rumen to repaint his living room based on the fact that 
//safety nylon costs 1.50 per square meter, paint costs 14.50 per litre and paint thinner costs 5.00 per litre
//Just in case Rumen decided to buy 10% additional paint, 2 square meters more nylon and lastly bags for 0.40 in total.
//The Painters want 30% of the total sum for the refurbishment. 
// We have to find the amount Rumen has to pay for all expenses
// As input we have 'needed amount of nylon' in square meters, needed paint and paint thinner in litres
// plus the number of hours for which the Painters would paint the living room.  

function refurbishment(input) {
    let safetyNaylon = (Number(input[0]) + 2) * 1.50;

    let initialPaint = (Number(input[1]) * 14.50);
    let paintPercentage = 10 * (Number(input[1]) * 14.50) / 100;
    let totalPaint = initialPaint + paintPercentage;

    let paintThinner = Number(input[2]) * 5.00;
    let bags = 0.40;

    let sum = (safetyNaylon + totalPaint + paintThinner + bags);

    let hourlyPay = (30 * sum) / 100;

    let totalPay = (hourlyPay * Number(input[3])) + sum;

    console.log(totalPay);

}

refurbishment([
    "5 ",
    "10 ",
    "10 ",
    "1 "])