//When Euro 2016's tickets were open to the public to buy, a group of fans decided to buy some. 
//The tickets were: 1.VIP - 499.99 and 2. Normal - 249.99
//The fans have a budget and the number of the group determines the cost of the transport:
// •    from 1 to 4 – 75% of budget.
// •	from 5 to 9 – 60% of budget.
// •	from 10 to 24 – 50% of budget.
// •	from 25 to 49 – 40% of budget.
// •	50 or more – 25% of budget.
// Write a programme which calculates if the rest of the money of the budget would be sufficient for the group to buy tickets
//and how much more they would need (if insufficient) or how much they would have left.
//Input: 1.Budget; 2.Category (VIP or Normal); 3.Number of people in the group
//The programme must print out: if budget is sufficient - o	"Yes! You have {left money} leva left."
//If budget is insufficient - o	"Not enough money! You need {money needed} leva."
//The output must be rounded to two decimal points

function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);

    let transport = 0;

    if (category === "VIP") {
        category = 499.99;
    } else {
        category = 249.99;
    }

    if (peopleCount <= 4) {
        transport = budget * 0.75;
    } else if (peopleCount <= 9) {
        transport = budget * 0.60;
    } else if (peopleCount <= 24) {
        transport = budget * 0.50; 
    } else if (peopleCount <= 49) {
        transport = budget * 0.40;
    } else {
        transport = budget * 0.25;
    }

    let ticketsCost = category * peopleCount;
    let totalCost = ticketsCost + transport;
    let moneyLeft = Math.abs(budget - (ticketsCost + transport));
   
    if (budget >= totalCost) {
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva.`)
    }
}

matchTickets([
    "1000",
    "Normal",
    "1"
]);

matchTickets([
    "30000",
    "VIP",
    "49",
    ])

matchTickets([
    "50000",
    "Normal",
    "200",
])