//Write a function which calculates the percentage of each type of tickets: student, standard, kid.
//Also, the programme must calculate what percentage of the movie theater is full. 
//Input: Until we receive a command "Finish": 1. Movie name; 2.Free spaces in the movie theater; 3.For each movie we receive a type of ticket until we receive a command "end";
//Output: 
//After each movie print out what percentage of the movie theater was full: "{movie name} - {percentage of taken places}% full."
//If we receive the command "Finish" the programme must print out:
//"Total tickets: {number of total tickets}"
//"{percentage of}% student tickets."
//"{percentage of}% standard tickets."
//"{percentage of}% kids tickets."
//All results must be rounded to two decimal points

function cinemaTickets(input) {
    let index = 0;

    let command = input[index];
    index++

    let totalTickets = 0;
    let totalStudentTickets = 0;
    let totalStandardTickets = 0;
    let totalKidTickets = 0;

    while (command !== "Finish") {
        let movieName = command;

        command = input[index];
        index++;

        let freeSpace = Number(command);

        command = input[index];
        index++;

        let studentTicketCount = 0;
        let standardTicketCount = 0;
        let kidTicketCount = 0;

        let currentTickets = 0;
        
        while (command !== "End") {
            if (command == "student") {
                studentTicketCount++;
            } else if (command == "standard") {
                standardTicketCount++;
            } else {
                kidTicketCount++;
            }

            currentTickets++;
            
            if (currentTickets >= freeSpace) {
                break;
            }

            command = input[index];
            index++;  
        }

        console.log(`${movieName} - ${(currentTickets / freeSpace * 100).toFixed(2)}% full.`)

        totalTickets += currentTickets;
        totalStudentTickets += studentTicketCount;
        totalStandardTickets += standardTicketCount;
        totalKidTickets += kidTicketCount;

        command = input[index];
        index++;
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(totalStudentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`)
}

// cinemaTickets([
//     "Taxi",
//     "10",
//     "standard",
//     "kid",
//     "student",
//     "student",
//     "standard",
//     "standard",
//     "End",
//     "Scary Movie",
//     "6",
//     "student",
//     "student",
//     "student",
//     "student",
//     "student",
//     "student",
//     "Finish"]);

cinemaTickets([
    "The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])

