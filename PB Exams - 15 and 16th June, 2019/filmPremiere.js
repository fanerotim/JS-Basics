function filmPremiere(input) {
    let movie = input[0];
    let package = input[1];
    let ticketCount = Number(input[2]);

    let cost = 0;
    let discount = 0;

    switch(movie) {
        case "John Wick":
            if (package === "Drink") {
                cost = 12;
            } else if (package === "Popcorn") {
                cost = 15;
            } else if (package === "Menu") {
                cost = 19;
            }
            break;
        case "Star Wars":
            if (package === "Drink") {
                cost = 18;
            } else if (package === "Popcorn") {
                cost = 25;
            } else if (package === "Menu") {
                cost = 30;
            }
            break;
        case "Jumanji":
            if (package === "Drink") {
                cost = 9;
            } else if (package === "Popcorn") {
                cost = 11;
            } else if (package === "Menu") {
                cost = 14;
            }
            break;
    }

    if (movie === "Star Wars" && ticketCount >= 4) {
        discount = cost * 0.30;
    } else if (movie === "Jumanji" && ticketCount === 2) {
        discount = cost * 0.15;
    }

    let totalCost = (ticketCount * cost) - (discount * ticketCount);
    
    console.log(`Your bill is ${totalCost.toFixed(2)} leva.`)
}

// filmPremiere([
//     "John Wick",
//     "Drink",
//     "6"]);

filmPremiere([
    "Star Wars",
    "Popcorn",
    "4"]);

filmPremiere([
    "Jumanji",
    "Menu",
    "2"])


