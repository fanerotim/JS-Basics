//Ivan decided to set a new World Record in long distance swimming. We receive: old world record in seconds, distance in metres,
//and the time Ivan needs for 1 meter of swimming. 
//Water resistance delays Ivan 12.5 seconds every 15 metres. 
//Find out the time for which Ivan would swim the distance and the difference from the World Record

function swimmingWorldRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMetres = Number(input[1]);
    let timeFor1Meter = Number(input[2]);

    let timeNeeded = distanceInMetres * timeFor1Meter;
    let delayCount = Math.floor(distanceInMetres / 15);
    let delayTime = delayCount * 12.5;

    timeNeeded += delayTime;

    if (timeNeeded < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${timeNeeded.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(timeNeeded - recordInSeconds).toFixed(2)} seconds slower.`)
    }

    console.log();
}

// swimmingWorldRecord(["10464", "1500", "20"])
swimmingWorldRecord(["55555.67", "3017", "5.03"])