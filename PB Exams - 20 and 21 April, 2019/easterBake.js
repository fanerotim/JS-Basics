function easterBake(input) {
    let index = 0;

    let easterBreadCount = Number(input[index]);
    index++;

    let command = Number(input[index]);
    index++;

    let counter = 1;

    let sugarUsed = 0;
    let flourUsed = 0;

    let maxSugar = 0;
    let maxFlour = 0;

    while(counter <= easterBreadCount) {
            
            sugarUsed += command;
            
            if (command > maxSugar) {
                maxSugar = command;
            }
            
            command = Number(input[index]);
            index++;

            flourUsed += command;

            if (command > maxFlour) {
                maxFlour = command;
            }

            command = Number(input[index]);
            index++;

            counter++;   
    }

    let neededSugar = Math.ceil(sugarUsed / 950);
    let neededFlour = Math.ceil(flourUsed / 750);

    console.log(`Sugar: ${neededSugar}`);
    console.log(`Flour: ${neededFlour}`)
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`)

}

// easterBake([
//     "3",
//     "400",
//     "350",
//     "250",
//     "300",
//     "450",
//     "380"]);

easterBake([
    "4",
    "500",
    "350",
    "560",
    "430",
    "600",
    "345",
    "578",
    "543"]);

