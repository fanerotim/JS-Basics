//Write a function which prints out the number of rooms in a building in a descending order, by taking into account the following rules:
//Each even floor has only offices
//Each odd floor has only apartments
//Each apartment should be printed in the following way:
//A{floor number}{apartment number}, apartment numbers start from 0.
//Each office should br printed in the following way:
//O{floor number}{office number}, office numbers also start from 0.
//On the last floor there are always only larger apartments, this is way in fron of their number it says "L" instead of "A".
//If there is only one floor, then it has only large apartments. 
//Input: 1. Number of floors; 2.Number of rooms per floor 

function building(input) {
    let floorCount = Number(input[0]);
    let roomCount = Number(input[1]);

    let roomType = '';
    let print = '';

    for (let i = floorCount; i > 0; i--) {
        if (i === floorCount) {
            roomType = "L";
        } else if (i % 2 === 0) {
            roomType = "O";
        } else if (i % 2 !== 0) {
            roomType = "A";
        }

        for (let n = 0; n < roomCount; n++) {
            if (n - 1 < roomCount) {
                print += (`${roomType}${i}${n} `);
            } if (n + 1 === roomCount) {
                console.log(print);
                print = '';
            }
        }
    }
}

// building(["6", "4"]);
// building(["9", "5"]);
building(["4", "4"]);