//Write a function which receives a day of the week as argument and if the day is a working day the function prints out "Working day"
//If it's weekend - it prints out "Weekend". If the argument is anything else than a day of week, the function must print out "Error".

function workingDay(input) {
    let command = input[0];

    switch(command) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day")
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend")
            break;
        default:
            console.log("Error");
    }
}

workingDay(["Monday"]);
workingDay(["Sunday"]);
workingDay(["April"]);