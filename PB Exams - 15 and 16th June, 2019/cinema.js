function cinema(input) {
    let index = 0;
    
    let capacity = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let currentSpaces = 0;
    let totalSpaces = 0;
    let ticketCost = 5;
    let discountCounter = 0;
    let isFull = false;

    while (command !== "Movie time!") {
        currentSpaces = Number(command);
        totalSpaces += currentSpaces;
       
        if (totalSpaces > capacity) {
            totalSpaces -= currentSpaces;
            isFull = true;
            break;
        }

        if (currentSpaces % 3 === 0) {
            discountCounter++;
        }

        command = input[index];
        index++;
    }

    let totalDiscount = discountCounter * ticketCost;

    let totalPrice = (totalSpaces * ticketCost) - totalDiscount;

    if (isFull === true) {
        console.log("The cinema is full.")
    } else {
        console.log(`There are ${capacity - totalSpaces} seats left in the cinema.`)
    }

    console.log(`Cinema income - ${totalPrice} lv.`)
}

cinema([
    "60",
    "10",
    "6",
    "3",
    "20",
    "15",
    "Movie time!"])

cinema([
    "50",
    "15",
    "10",
    "10",
    "15",
    "5"])

cinema([
    "100",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"])

