function cinemaTickets(input) {
    let index = 0;

    let command = input[index];
    index++;

    let totalTicketsForTheDay = 0;
    let totalStudentTickets = 0;
    let totalStandardTickets = 0;
    let totalKidTickets = 0;

    while (command !== "Finish") {
        let movieName = command;

        command = input[index];
        index++;

        let capacity = Number(command);
        
        command = input[index];
        index++;

        let student = 0;
        let standard = 0;
        let kid = 0;
        let currentTicket = 0;

        while (command !== "End") {
            if (command === "student") {
                student++;
            } else if (command === "standard") {
                standard++;
            } else {
                kid++;
            }

            currentTicket++;
            totalTicketsForTheDay++;

            if (currentTicket >= capacity) {
                break;
            }

            command = input[index];
            index++;
        }

        console.log(`${movieName} - ${(currentTicket / capacity * 100).toFixed(2)}% full.`);

        command = input[index];
        index++;

        totalStudentTickets += student;
        totalStandardTickets += standard;
        totalKidTickets += kid;
    }

    console.log(`Total tickets: ${totalTicketsForTheDay}`);
    console.log(`${(totalStudentTickets / totalTicketsForTheDay * 100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandardTickets / totalTicketsForTheDay * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKidTickets / totalTicketsForTheDay * 100).toFixed(2)}% kids tickets.`)
}

cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);

// cinemaTickets(["The Matrix",
//     "20",
//     "student",
//     "standard",
//     "kid",
//     "kid",
//     "student",
//     "student",
//     "standard",
//     "student",
//     "End",
//     "The Green Mile",
//     "17",
//     "student",
//     "standard",
//     "standard",
//     "student",
//     "standard",
//     "student",
//     "End",
//     "Amadeus",
//     "3",
//     "standard",
//     "standard",
//     "standard",
//     "Finish"])
    
