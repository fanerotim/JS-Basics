function trekkingMania(input) {
    let groupCount = Number(input[0]);

    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    let totalNumberClimbers = 0;

   for (let i = 1; i <= groupCount; i++ ) {
        let counter = Number(input[i]);
        totalNumberClimbers += counter;

        if (counter <= 5) {
            musala += counter;
        } else if (counter <= 12) {
            montblanc += counter;
        } else if (counter <= 25) {
            kilimanjaro += counter;
        } else if (counter <= 40) {
            k2 += counter;
        } else {
            everest += counter;
        }  
    }

    console.log(`${((musala / totalNumberClimbers) * 100).toFixed(2)}%`);
    console.log(`${((montblanc / totalNumberClimbers) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaro / totalNumberClimbers) * 100).toFixed(2)}%`);
    console.log(`${((k2 / totalNumberClimbers) * 100).toFixed(2)}%`);
    console.log(`${((everest / totalNumberClimbers) * 100).toFixed(2)}%`);
}

// trekkingMania([
//     "10",
//     "10",
//     "5",
//     "1",
//     "100",
//     "12",
//     "26",
//     "17",
//     "37",
//     "40",
//     "78"]);

trekkingMania([
    "5",
    "25",
    "41",
    "31",
    "250",
    "6"])
    
