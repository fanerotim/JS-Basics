//Write a function which receives an hour (integer), day of the week (text) and then checks if an ofice of a bussiness is open.
//Working hours are 10 to 18, monday-saturday. 

function workingTime(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (hour >= 10 && hour < 19 && day !== "Sunday") {

        switch(day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            }
    } else {
        console.log("closed");
}   
}


// workingTime(["19", "Friday"]);
// workingTime(["11", "Monday"]);
// workingTime(["11", "Sunday"]);