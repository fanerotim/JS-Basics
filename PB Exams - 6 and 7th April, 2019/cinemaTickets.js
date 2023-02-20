function cinemaTickets(input) {
    let index = 0;
    
    let command = input[index];
    index++;

    let totalTicketsCount = 0;
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

        let ticketCount = 0;
        let student = 0;
        let standard = 0;
        let kid = 0;

        while (command !== "End") {

            if (command === "student") {
                student++;
            } else if (command === "standard") {
                standard++;
            } else if (command === "kid") {
                kid++;
            }

            ticketCount++;

            if (ticketCount >= capacity) {
                break;
            }

            command = input[index];
            index++;       
        }

        let percentageFull = ticketCount / capacity * 100
        console.log(`${movieName} - ${(percentageFull).toFixed(2)}% full.`);

        totalTicketsCount += ticketCount;
        totalStudentTickets += student;
        totalStandardTickets += standard;
        totalKidTickets += kid;

        command = input[index];
        index++;
    }

    let percentageStudentTickets = totalStudentTickets / totalTicketsCount * 100;
    let percentageStandardTickets = totalStandardTickets / totalTicketsCount * 100;
    let percentageKidTickets = totalKidTickets / totalTicketsCount * 100;

    console.log(`Total tickets: ${totalTicketsCount}`);
    console.log(`${(percentageStudentTickets).toFixed(2)}% student tickets.`);
    console.log(`${(percentageStandardTickets).toFixed(2)}% standard tickets.`);
    console.log(`${(percentageKidTickets).toFixed(2)}% kids tickets.`);
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


// cinemaTickets([
//     "The Matrix",
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
//     "standard",
//     "Finish"]);


