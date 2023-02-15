function highJump(input) {
    let goalHeight = Number(input[0]);

    let startingHeight = goalHeight - 30;
    let attempsCount = 0;

    let failCounter = 1;
    let allowedFailure = 3;

    let currentJump = 0;

    for (let i = 1; i < input.length; i++) {

        if (Number(input[i]) <= 0) {
            break;
        }

        currentJump = Number(input[i]);
        attempsCount++;

        while (failCounter <= allowedFailure) {

            if (currentJump > startingHeight) {

                if (failCounter > 1) {
                    failCounter = 1;
                }

                startingHeight += 5;
                break;

            } else if (currentJump <= startingHeight) {
                failCounter++;
                break;
            }
        }

        if (failCounter > allowedFailure) {
            console.log(`Tihomir failed at ${startingHeight}cm after ${attempsCount} jumps.`)
            return;
        }
    }

    if (currentJump > goalHeight && startingHeight >= goalHeight) {
        console.log(`Tihomir succeeded, he jumped over ${goalHeight}cm after ${attempsCount} jumps.`);
        return;
    }
    console.log(`Tihomir failed at ${startingHeight}cm after ${attempsCount} jumps.`)

}

highJump([
    "231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235",
    ""]);

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
