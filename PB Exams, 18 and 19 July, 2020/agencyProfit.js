function agencyProfit(input) {
    let companyName = input[0];
    let seniorTicketCount = Number(input[1]);
    let childrenTicketCount = Number(input[2]);
    let seniorTicketPrice = Number(input[3]);
    let fee = Number(input[4]);
    
    let childrenTicketPrice = seniorTicketPrice * 0.30;

    let seniorTicketTotalPrice = seniorTicketCount * seniorTicketPrice;
    let childrenTicketTotalPrice = childrenTicketCount * childrenTicketPrice;
    let totalFee = (seniorTicketCount + childrenTicketCount) * fee;

    totalPrice = seniorTicketTotalPrice + childrenTicketTotalPrice + totalFee;

    let totalRevenue = totalPrice * 0.20;

    console.log(`The profit of your agency from ${companyName} tickets is ${totalRevenue.toFixed(2)} lv.`); 
}

// agencyProfit([
//     "WizzAir",
//     "15",
//     "5",
//     "120",
//     "40"])

agencyProfit([
    "Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"])

