function highJump(input) {
    let wantedHeight = Number(input[0]);
    
    let currentHeight = wantedHeight - 30;

    let currentJump = 0;
    let failedJumps = 0;
    let attempsCount = 0;

    for (let i = 1; i < input.length; i++) {
        if (Number(input[i]) <= 0) {
            break;
        }

        currentJump = Number(input[i]);
        currentIndex = i;

        attempsCount++;

        while (currentHeight < wantedHeight) {

            if (currentJump > currentHeight) {
           
                currentHeight += 5;

                if (failedJumps > 0) {
                    failedJumps = 0;
                }
                break;
            } else if (currentJump <= currentHeight) {
                failedJumps++;
                if (failedJumps === 3) {
                    console.log(`Tihomir failed at ${currentHeight}cm after ${attempsCount} jumps.`);
                    return;
                } else {
                    break;
                }
            }
        }   
    }

    if (currentHeight >= wantedHeight && currentJump > wantedHeight) {
        console.log(`Tihomir succeeded, he jumped over ${currentHeight}cm after ${attempsCount} jumps.`);
        return;
    }

    console.log(`Tihomir failed at ${currentHeight}cm after ${attempsCount} jumps.`);  
}

// highJump([
//     "231",
//     "205",
//     "212",
//     "213",
//     "228",
//     "229",
//     "230",
//     "235",
//     ""]);

// highJump([
//     "250",
//     "225",
//     "224",
//     "225",
//     "228",
//     "231",
//     "235",
//     "234",
//     "235",
//     ""]);

highJump([
    "231",
    "202",
    "207",
    "212"]);