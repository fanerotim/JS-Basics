//The SoftUni team is organising a football tournament. First we receive the capacity of the stadium and the number of fans. 
//Then, we receive sector name (A, B, V, G) for each fan.
//The fans of the first team are located in sectors A and B and the fans of the second team - sectors V and G. 
// Write a programme which calculates the percentage of the fans in each sector, based on the total number of fans on the stadium, 
//as well as the percentage of fans of both teams compared to the capacity of the stadium. The total number of fans does not 
//exceed the stadium's capacity. 
//Input: 1. Stadium capacity; 2. Number of fans; and then 'n' number of Sectors in which the fans are located 

function footballTournament(input) {
    let stadiumCapacity = Number(input[0]);
    let fansCount = Number(input[1]);

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 2; i <= fansCount + 1; i++) {
        let sectorCount = input[i];
        switch(sectorCount) {
            case "A":
                sectorA += 1;
                break;
            case "B":
                sectorB += 1;
                break;
            case "V":
                sectorV += 1;
                break;
            case "G":
                sectorG += 1;
                break;
        }
    }

    console.log(`${((sectorA / fansCount) * 100).toFixed(2)}%`);
    console.log(`${((sectorB / fansCount) * 100).toFixed(2)}%`);
    console.log(`${((sectorV / fansCount) * 100).toFixed(2)}%`);
    console.log(`${((sectorG / fansCount) * 100).toFixed(2)}%`);
    console.log(`${((fansCount / stadiumCapacity) * 100).toFixed(2)}%`)
}

// footballTournament([
//     "76",
//     "10",
//     "A",
//     "V",
//     "V",
//     "V",
//     "G",
//     "B",
//     "A",
//     "V",
//     "B",
//     "B"]);

// footballTournament([
//     "93",
//     "16",
//     "A",
//     "V",
//     "G",
//     "G",
//     "B",
//     "B",
//     "G",
//     "B",
//     "A",
//     "B",
//     "B",
//     "B",
//     "A",
//     "B",
//     "B",
//     "A"
// ]);

footballTournament([
    "1000",
    "12",
    "A",
    "A",
    "V",
    "V",
    "A",
    "G",
    "A",
    "A",
    "V",
    "G",
    "V",
    "A"
]);