function easterDecoration(input) {
    let index = 0;

    let clientsCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let counter = 1;
    let productCounter = 0;

    let basket = 1.50;
    let wreath = 3.80;
    let chocolateBunny = 7;

    let price = 0;
    let totalPrice = 0;
    

    while (counter <= clientsCount) {
        let discount = 0;

        while (command !== "Finish") {
            productCounter++;

            if (command === "basket") {
                price += basket;
            } else if (command === "wreath") {
                price += wreath;
            } else if (command === "chocolate bunny") {
                price += chocolateBunny;
            }

            command = input[index];
            index++;
        }

        if (productCounter % 2 === 0) {
            discount = price * 0.20;
            price -= discount;
        }

        console.log(`You purchased ${productCounter} items for ${price.toFixed(2)} leva.`);
        productCounter = 0;
        totalPrice += price;
        price = 0;
        counter++;

        command = input[index];
        index++;
    }

    let averagePay = totalPrice / clientsCount;

    console.log(`Average bill per client is: ${averagePay.toFixed(2)} leva.`)
}

// easterDecoration([
//     "2",
//     "basket",
//     "wreath",
//     "chocolate bunny",
//     "Finish",
//     "wreath",
//     "chocolate bunny",
//     "Finish"]);

easterDecoration([
    "1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"])

