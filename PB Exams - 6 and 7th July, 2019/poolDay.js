function poolDay(input) {
    let peopleCount = Number(input[0]);
    let entryFee = Number(input[1]);
    let sunLoungerCost = Number(input[2]);
    let umbrellaCost = Number(input[3]);

    let umbrellaCount = Math.ceil(peopleCount / 2);
    let sunLoungerCount = Math.ceil(peopleCount * 0.75);
    
    let totalEntryFeeCost = peopleCount * entryFee;
    let totalUmbrellaCost = umbrellaCount * umbrellaCost;
    let totalSunLoungerCost = sunLoungerCount * sunLoungerCost;

    let totalCost = totalEntryFeeCost + totalUmbrellaCost + totalSunLoungerCost;

    console.log(`${totalCost.toFixed(2)} lv.`);
}

poolDay([
    "21",
    "5.50",
    "4.40",
    "6.20"  
    ])

poolDay([
    "50",
    "6",
    "8",
    "4"
    ])

poolDay([
    "100",
    "8",
    "6",
    "4"
    ])