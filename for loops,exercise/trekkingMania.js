//Climbers gather in groups and decide to climb different mountain peaks. Depending on the size of the group, they would climb different peaks:
// up to 5 people - peak Musala. 6-12 people - Montblanc. 13-25 - Kilimandjaro. 26-40 - K2. 41 or more people - Everest. 
// Write a programme that would calculate the percentage of the climbers climbing the different peaks. 
// We receive - the number of groups of climbers and the number of people in each separate group.   

function trekkingMania(input) {
    let groupCount = Number(input[0]);
    
    let Musala = 0;
    let Montblanc = 0;
    let Kilimanjaro = 0;
    let K2 = 0;
    let Everest = 0;

    let numberOfPeople = 0;

    for (let i = 1; i <= groupCount; i++) {
        let peopleCount = Number(input[i]);
        numberOfPeople += peopleCount;

        if (peopleCount <= 5) {
            Musala += peopleCount;
        } else if (peopleCount <= 12) {
            Montblanc += peopleCount;
        } else if (peopleCount <= 25) {
            Kilimanjaro += peopleCount;
        } else if (peopleCount <= 40) {
            K2 += peopleCount;
        } else {
            Everest += peopleCount;
        }
    }

    Musala = (Musala / numberOfPeople) * 100;
    Montblanc = (Montblanc / numberOfPeople) * 100;
    Kilimanjaro = (Kilimanjaro / numberOfPeople) * 100;
    K2 = (K2 / numberOfPeople) * 100;
    Everest = (Everest / numberOfPeople) * 100;


    console.log(`${(Musala).toFixed(2)}%`);
    console.log(`${(Montblanc).toFixed(2)}%`);
    console.log(`${(Kilimanjaro).toFixed(2)}%`);
    console.log(`${(K2).toFixed(2)}%`);
    console.log(`${(Everest).toFixed(2)}%`);
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
        "6"]);
    
