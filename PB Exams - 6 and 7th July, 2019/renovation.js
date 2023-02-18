function renovation(input) {
    let index = 0;

    let height = Number(input[index]);
    index++;

    let width = Number(input[index]);
    index++;

    let percentageNotToBePainted = Number(input[index]);
    index++; 

    let volume = Math.ceil(height * width * 4);
    percentageNotToBePainted = percentageNotToBePainted / 100;
    volume -= volume * percentageNotToBePainted;
    volume = volume;

    let command = input[index];
    index++;

    let paint = 0;

    while (command !== "Tired!") {
        paint += Number(command);

        if (paint >= volume) {
            break;
        }
        command = input[index];
        index++;
    }

    if (command === "Tired!") {
        console.log(`${volume - paint} quadratic m left.`);
    }

    if (paint > volume) {
        console.log(`All walls are painted and you have ${paint - volume} l paint left!`) 
    } else if (paint == volume) {
        console.log(`All walls are painted! Great job, Pesho!`)
    }
}

renovation([
    "3",
    "5",
    "10",
    "2",
    "3",
    "4",
    "Tired!"
]);

renovation([
    "2",
    "3",
    "25",
    "6",
    "7",
    "8"
    ])