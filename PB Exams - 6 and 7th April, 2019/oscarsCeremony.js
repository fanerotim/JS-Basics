function oscarsCeremony(input) {
    let rent = Number(input[0]);

    let statuettes = rent * 0.70;
    let catering = statuettes * 0.85;
    let sound = catering / 2;

    let totalCost = rent + statuettes + catering + sound;

    console.log(totalCost.toFixed(2));

}

oscarsCeremony(["3500"]);
oscarsCeremony(["5555"]);