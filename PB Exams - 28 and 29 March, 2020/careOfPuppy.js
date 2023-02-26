function careOfPuppy(input) {
    let index = 0;

    let availableFood = Number(input[index]);
    index++

    let foodInGrams = availableFood * 1000;

    let command = input[index];
    index++;
    
    let eatenFood = 0;

    while (command !== "Adopted") {
        eatenFood += Number(command);

        command = input[index];
        index++
    }

    if (eatenFood <= foodInGrams) {
        console.log(`Food is enough! Leftovers: ${foodInGrams - eatenFood} grams.`)
    } else {
        console.log(`Food is not enough. You need ${eatenFood - foodInGrams} grams more.`)
    }
}

careOfPuppy([
    "4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"
])

careOfPuppy([
    "3",
    "1000",
    "1000",
    "1000",
    "Adopted"     
])

careOfPuppy([
    "2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"])

