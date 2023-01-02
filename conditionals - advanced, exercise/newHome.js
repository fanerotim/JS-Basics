function newHome(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    switch(flowerType) {
        case "Roses":
            sum = flowerCount * 5;
            break;
        case "Dahlias":
            sum = flowerCount * 3.80;
            break;
        case "Tulips":
            sum = flowerCount * 2.80;
            break;
        case "Narcissus":
            sum = flowerCount * 3;
            break;
        case "Gladiolus":
            sum = flowerCount * 2.50;
            break;
    }

    if (flowerType === "Roses" && flowerCount > 80) {
        sum -= sum * 0.1;
    } else if (flowerType === "Dahlias" && flowerCount > 90) {
        sum  -= sum * 0.15;
    } else if (flowerType === "Tulips" && flowerCount > 80) {
        sum -= sum * 0.15;
    } else if (flowerType === "Narcissus" && flowerCount < 120) {
        sum  += sum * 0.15
    } else if (flowerType === "Gladiolus" && flowerCount < 80) {
        sum += sum * 0.20;
    }

    // let totalPrice = roses + dahlias + tulips + narcissus + gladiolus;

    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - sum).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
    }
}
// newHome(["Roses", "55", "250"]);
newHome(["Gladiolus", "64", "160"]);
// newHome(["Tulips", "88", "260"]);
