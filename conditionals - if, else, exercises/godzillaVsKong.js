//Filming of Godzilla vs Kong starts. Director asks us to write a function that would determine if the funding would be sufficient 
// We receive the budget of the movie, number of walk-ons, and clothing price of each walk-on
//Movie decor costs 10% of the budget, and if there are more than 150 walk-ons there is a discount of 10%

function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let walkOn = Number(input[1]);
    let clothing = Number(input[2]);

    let decor = budget * 0.1;

    let clothingPrice = walkOn * clothing;

    if (walkOn > 150) {
        clothingPrice = clothingPrice - (clothingPrice * 0.1);
    }

    if (decor + clothingPrice > budget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${((decor + clothingPrice) - budget).toFixed(2)} leva more.`)
    } else if (decor + clothingPrice <= budget) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - (decor + clothingPrice)).toFixed(2)} leva left.`)
    }
}

// godzillaVsKong(["15437.62", "186", "57.99"]);
// godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["9587.88", "222", "55.68"]);