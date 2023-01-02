//Weired, but most people plan their vacation ahead of time. Young developer has a certain budget and free time in a certain season. 
// Write a function that receives budget and season and then calculates where can the developer spend his holiday.
// The budget depends on the destination, and the season determines how much of the budget would be spent. If it's summer the developer
//stays at a Camping, in winter stays in a Hotel. If he's travels to Europe, he stays in a Hotel, regardless of the season. Every Camping
// and Hotel, according to the destination, has its own price, which represents a certain percentage of the budget.
// 100 leva or less - the developer stays somewhere in Bulgaria: summer - he spends 30% of the budget. winter - 70% of the budget. 
// 1000 leva or less - stays somewhere in the Balkans. summer - 40% of the budget. winter - 80% of the budget. 
// More than 1000 leva - somewhere in Europe. In Europe the developer spends 90% of the budget. 
// We receive two arguments - budget and a season. 

function trip(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let stay = '';
    let country = '';

    if (season === "summer") {
        stay = 'Camp';
    } else {
        stay = 'Hotel';
    }

    if (budget <= 100) {
        country = 'Bulgaria';
        switch(season) {
            case "summer":
                budget = budget * 0.30;
                break;
            case "winter":
                budget = budget * 0.70;
                break;
        }
    } else if (budget > 100 && budget <= 1000) {
        country = "Balkans";
        switch(season) {
            case "summer":
                budget = budget * 0.40;
                break;
            case "winter":
                budget = budget * 0.80;
                break;
        }
    } else {
        country = "Europe";
        stay = "Hotel";
        budget = budget * 0.90;
    }

    console.log(`Somewhere in ${country}`);
    console.log(`${stay} - ${(budget).toFixed(2)}`)
}

// trip(["50", "summer"]);
// trip(["75", "winter"]);
// trip(["312", "summer"]);
// trip(["678.53", "winter"]);
// trip(["1500", "summer"]);