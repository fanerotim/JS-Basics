//write a function which receives hours and minutes and then calculates what would the time be 15 minutes later
//The result must be in the format 'hours:minutes'. The hours are always between 0 and 23,
// and the minutes between 0 and 59. The minutes must start with a leading 0, when this is necesasry. 

function time(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]) + 15;

    // if (hours >= 0 && hours <= 23) {
    // } 
    
    // if (minutes >= 0 && minutes <= 59) {
    // }
    // minutes += 15;

    if (minutes >= 60) {
        hours = hours + 1;
        minutes = minutes - 60;
    }
    
    if (hours == 24) {
        hours = 0;
    } else {
        hours = hours;
    }

    if (minutes <= 9) {
        minutes = ("0" + minutes);
    } else {
        minutes = minutes;
    }

console.log(`${hours}:${minutes}`);

}

time(["23", "45"]);