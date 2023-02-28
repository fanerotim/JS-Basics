function movieProfit(input) {
    let movieName = input[0];
    let daysCount = Number(input[1]);
    let ticketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercentage = Number(input[4]);

    let totalTickets = daysCount * ticketsCount;
    let totalPrice = totalTickets * ticketPrice;
    
    cinemaPercentage = cinemaPercentage / 100;

    totalPrice -= totalPrice * cinemaPercentage;

    console.log(`The profit from the movie ${movieName} is ${totalPrice.toFixed(2)} lv.`)
}

movieProfit([
    "The Programmer",
    "20",
    "500",
    "7.50",
    "7"]);

movieProfit([
    "Python Basics",
    "40",
    "34785",
    "10.45",
    "14"]);

movieProfit([
    "The Jungle",
    "22",
    "20500",
    "9.37",
    "30"]);


