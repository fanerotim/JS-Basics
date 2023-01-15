//Three athletes finish their competition for a certain number of seconds (1 - 50). Write a function that receives three arguments - seconds, and calculates
//the total time in format "minutes:seconds". The seconds needs to start with 0 if they are below 9 (01, 02, 03 etc)

function sumSeconds(input) {
    let athleteOne = Number(input[0]);
    let athleteTwo = Number(input[1]);
    let athleteThree = Number(input[2]);

    let totalTime = athleteOne + athleteTwo + athleteThree;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`)
    }

}

// sumSeconds([
//     "35",
//     "45",
//     "44"]);

// sumSeconds([
//     "22", 
//     "7", 
//     "34"]);

// sumSeconds([
//     "50",
//     "50",
//     "49"]);

// sumSeconds([
//     "14", 
//     "12",
//     "10"]);

