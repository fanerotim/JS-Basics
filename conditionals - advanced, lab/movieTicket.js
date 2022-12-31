//Write a function that receives day of the week (text) and prints out price of Cinema Ticket for that day.

function movieTicket(input) {
    let command = input[0];

    switch(command) {
        case "Monday": console.log("12"); break;
        case "Tuesday": console.log("12"); break;
        case "Wednesday": console.log("14"); break;
        case "Thursday": console.log("14"); break;
        case "Friday": console.log("12"); break;
        case "Saturday": console.log("16"); break;
        case "Sunday": console.log("16"); break;
    }
}

movieTicket(["Sunday"]);