//We are attending charity bike ride where the participants are split in 'junior' and 'senior' groups. The money is collected from the entry fee. 
//Depending on the age group and type of track on which the race would take place, the entry fee is different:

// Group	trail	cross-country	downhill	road
// juniors	5.50	8	12.25	20
// seniors	7	9.50	13.75	21.50

//If in "cross-country" race there are more than 50 participants from all age groups, the entry fee is reduced by 25%. 
// The organisers take 5% of the total sum for expenses for the race.
//Input: 1. Number of juniors; 2. Number of seniors; 3; Type of track;
//The function must print out the collected total sum and it sum must be rounded to two decimal points


function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let trackType = input[2];

    let juniorsCollectedMoney = 0;
    let seniorsCollectedMoney = 0;

    switch(trackType) {
        case "trail":
            juniorsCollectedMoney = juniors * 5.50;
            seniorsCollectedMoney = seniors * 7;
            break;
        case "cross-country":
            juniorsCollectedMoney = juniors * 8;
            seniorsCollectedMoney = seniors * 9.50;
            if (seniors + juniors >= 50) {
                juniorsCollectedMoney = juniors * (8 - (8 * 0.25));
                seniorsCollectedMoney = seniors * (9.50 - (9.50 * 0.25));
            }
            break;
        case "downhill":
            juniorsCollectedMoney = juniors * 12.25;
            seniorsCollectedMoney = seniors * 13.75;
            break;
        case "road":
            juniorsCollectedMoney = juniors * 20;
            seniorsCollectedMoney = seniors * 21.50;
            break;
    }

    let collectedMoney = juniorsCollectedMoney + seniorsCollectedMoney;
    let expenses = collectedMoney * 0.05;
    let totalCollectedMoney = collectedMoney - expenses;
    console.log(totalCollectedMoney.toFixed(2));
}

// bikeRace([
//     "10",
//     "20",
//     "trail"
// ]);

// bikeRace([
//     "21",
//     "26",
//     "cross-country"
//     ])

// bikeRace([
//     "30",
//     "25",
//     "cross-country"
//     ])

// bikeRace([
//     "10",
//     "10",
//     "downhill"
//     ])

bikeRace([
    "3",
    "40",
    "road"
    ])