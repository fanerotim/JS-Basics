//Write a function which prints out all possible first dates of the guests of a restaurant. When the guests arrive, each of them receives a special ticket with numbers, starting from 1.
//If all tables are busy, the programme must end. Each table has two seats. 
//Input: 1. Number of men; 2. Number of women. 3. Number of tables.
//Output must be in the following format: •	({№ client} <-> {№ client}) ({№ client} <-> {№ client}) ... For exmaple: (1 <-> 1) (1 <-> 2) (2 <-> 1) (2 <-> 2)

function challengeTheWedding(input) {
    let menCount = Number(input[0]);
    let womenCount = Number(input[1]);
    let tablesCount = Number(input[2]);
    
    let manNumber = 0;
    let womanNumber = 0;
    let counter = 0;

    let finalResult = '';

    for (let man = 1; man <= menCount; man++) {
        manNumber = man;
        for (let woman = 1; woman <= womenCount; woman++) {
            womanNumber = woman;
            counter++;

            if (counter <= tablesCount) {
                finalResult += `(${manNumber} <-> ${womanNumber}) ` 
            }
        }   
    }

    console.log(finalResult)
}

// challengeTheWedding([
//     "2",
//     "2",
//     "6"
//     ])

challengeTheWedding([
    "2",
    "2",
    "3"
    ])