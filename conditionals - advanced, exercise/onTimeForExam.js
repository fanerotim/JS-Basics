function onTimeForExam(input){
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examHourMinutes = examHour * 60;
    let arrivalHourMinutes = arrivalHour * 60;

    let arrivalTime = arrivalHourMinutes + arrivalMinute;
    let examStart = examHourMinutes + examMinute;

    let minutesDifference = Math.abs(arrivalTime - examStart);

    let hourDiff = Math.floor(minutesDifference / 60);
    let minsDiff = minutesDifference % 60;

    if (minsDiff < 10 && hourDiff >= 1) {
        minsDiff = '0' + minsDiff;
    } 
   
    if (arrivalTime > examStart) {
        console.log("Late");
        if (minutesDifference >= 60) {
            console.log(`${hourDiff}:${minsDiff} hours after the start`)
        } else {
            console.log(`${minsDiff} minutes after the start`)
        }
    } else if (arrivalTime === examStart) {
        console.log("On time");
    } else if ((arrivalTime + 30) >= examStart) {  
        console.log("On time");  
        if (minutesDifference >= 60) {
            console.log(`${hourDiff}:${minsDiff} hours before the start`)
        } else {
            console.log(`${minsDiff} minutes before the start`)
        }
    } else {
        console.log("Early");
        if (minutesDifference >= 60) {
            console.log(`${hourDiff}:${minsDiff} hours before the start`)
        } else {
            console.log(`${minsDiff} minutes before the start`)
        }

    }  
}

// onTimeForExam(["9", "30", "9", "50"]);
// onTimeForExam(["9", "00", "8", "30"]);
// onTimeForExam(["16", "00", "15", "00"]); 
// onTimeForExam(["9", "00", "10", "30"]); 
// onTimeForExam(["14", "00", "13", "55"]); 
// onTimeForExam(["11", "30", "8", "12"]); 
// onTimeForExam(["10", "00", "10", "00"]); 
// onTimeForExam(["11", "30", "10", "55"]); 
// onTimeForExam(["11", "30", "12", "29"]); 