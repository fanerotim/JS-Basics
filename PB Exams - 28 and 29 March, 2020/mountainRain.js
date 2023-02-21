function mountainRain(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMetres = Number(input[1]);
    let timeInSecondsForOneMeter = Number(input[2]);

    let numberOfDelays = Math.floor(distanceInMetres / 50);
    let delayCount = numberOfDelays * 30;

    let neededTime = distanceInMetres * timeInSecondsForOneMeter;

    neededTime += delayCount;

    if (neededTime < recordInSeconds) {
        console.log(`Yes! The new record is ${neededTime.toFixed(2)} seconds.`)
    } else if (neededTime > recordInSeconds) {
        console.log(`No! He was ${(neededTime - recordInSeconds).toFixed(2)} seconds slower.`)
    } else {
        console.log(`No! He was ${(neededTime - recordInSeconds).toFixed(2)} seconds slower.`) 
    }

}

mountainRain([
    "10164",
    "1400",
    "25"])

mountainRain([
    "5554.36",
    "1340",
    "3.23"]);

mountainRain([
    "1377",
    "389",
    "3"])

    
