function movieDay(input) {
    let totalTime = Number(input[0]);
    let scenesCount = Number(input[1]);
    let sceneDuration = Number(input[2]);

    let preparationTime = totalTime * 0.15;
    let scenesTime = scenesCount * sceneDuration;
    let neededTime = scenesTime + preparationTime;

    if (totalTime >= neededTime) {
       console.log(`You managed to finish the movie on time! You have ${Math.round(totalTime - neededTime)} minutes left!`) 
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(neededTime - totalTime)} minutes.`)
    }
}

movieDay([
    "120",
    "10",
    "11"]);

movieDay([
    "60",
    "15",
    "3"]);

