//The cat Tom loves to sleep all day. Unfortunately, his owner likes to play with him whenever he has free time. 
//To rest well, Tom needs 30000 hours of sleep per year. Tom's time for sleep depends on his owner's free time:
//When he's at work, his owner plays with Tom 63 minuts a day.
//When he has days off, he plays with Tom 217 minutes per day.
//Write a function which enters numbers of days off and prints out if Tom would be able to rest well and what
//the difference for the current year if we take that one year is 365 days. 
//Input: 1. Number of days off
//Expected Output:
// •	If the time for play is more than the required time for sleep:
// o	 first lie: “Tom will run away”
// o	Second line:: “{H} hours and {M} minutes more for play”
// •	If time for play is less than the time needed to rest
// o	first line - “Tom sleeps well”
// o	 second line - “{H} hours and {M} minutes less for play”


function sleepyCatTom(input) {
    let daysOff = Number(input[0]);
    let speedRequiredToFeelRested = 30000;
    let workDay = 63;
    let dayOff = 127;
    let year = 365;

    let lostSleep = (dayOff * daysOff) + ((year - daysOff) * workDay);

    let moreTimeNeeded = lostSleep - speedRequiredToFeelRested;
    let moreHours = Math.floor(moreTimeNeeded / 60);
    let moreMinutes = moreTimeNeeded % 60;

    let leftTime = speedRequiredToFeelRested - lostSleep;
    let leftHours = Math.floor(leftTime / 60);
    let leftMinutes = leftTime % 60;

    if (speedRequiredToFeelRested <= lostSleep) {
        console.log("Tom will run away");
        console.log(`${moreHours} hours and ${moreMinutes} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${leftHours} hours and ${leftMinutes} minutes less for play`)
    }
}

sleepyCatTom(["20"]);
sleepyCatTom(["113"]);