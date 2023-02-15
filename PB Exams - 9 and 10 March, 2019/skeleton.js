function skeleton(input) {
    let goalTimeInMinutes = Number(input[0]);
    let goalTimeInSeconds = Number(input[1]);
    let distanceInMeters = Number(input[2]);
    let secondsFor100Meters = Number(input[3]);

    let totalTimeInSeconds = (goalTimeInMinutes * 60) + goalTimeInSeconds;
    let delayCount = distanceInMeters / 120;
    let delayInSeconds = delayCount * 2.5;
    let neededTime = (distanceInMeters / 100) * secondsFor100Meters;
    neededTime -= delayInSeconds;

    if (neededTime <= totalTimeInSeconds) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${neededTime.toFixed(3)}.`)
    } else {
        console.log(`No, Marin failed! He was ${(neededTime - totalTimeInSeconds).toFixed(3)} second slower.`)
    }
    
}

skeleton([
    "2",
    "12",
    "1200",
    "10"]);

skeleton([
    "1",
    "20",
    "1546",
    "12"])

