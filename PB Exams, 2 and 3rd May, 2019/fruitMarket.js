function fruitMarket(input) {
    let strawberryPrice = Number(input[0]);
    let amountBananas = Number(input[1]);
    let amountOranges = Number(input[2]);
    let amountRaspberries = Number(input[3]);
    let amountStrawberries = Number(input[4]);

    let raspberriesPrice = strawberryPrice / 2;
    let orangesPrice = raspberriesPrice * 0.60;
    let bananasPrice = raspberriesPrice * 0.20;

    let totalPrice = (strawberryPrice * amountStrawberries) + (raspberriesPrice * amountRaspberries) + (orangesPrice * amountOranges) + (bananasPrice * amountBananas);

    console.log(totalPrice.toFixed(2));
}

fruitMarket([
    "48",
    "10",
    "3.3",
    "6.5",
    "1.7"
    ])

fruitMarket([
    "63.5",
    "3.57",
    "6.35",
    "8.15",
    "2.5"
     
])