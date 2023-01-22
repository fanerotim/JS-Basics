// Write a function, which calculates how many solutions are possible in the equation:
// x1 + x2 + x3 = n;
// Input: 1. The number 'n';

function combinations(input) {
    let num = Number(input[0]);
    let combinationCounter = 0;

    for (let x = 0; x <= num; x++) {
        for (let y = 0; y <= num; y++) {  
            for (let z = 0; z <= num; z++) {
                if (x + y + z === num) {
                    combinationCounter += 1;
                } 
            }
            }   
        }
        console.log(combinationCounter);
}

combinations(["25"]);
combinations(["20"]);
combinations(["5"]);