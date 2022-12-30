// A bulgarian entrepreneur opens small shops in different bulgarian cities and sells products on different prices
// according to the city. Write a function that receives arguments - products, citiy and quantity; then calculates and prints out
// how much the provided quantity from the chosen product costs in the chosen city.

function neighbourhoodShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee":
                    console.log(quantity * 0.5);
                    break;
                case "water":
                    console.log(quantity * 0.8);
                    break;
                case "beer":
                    console.log(quantity * 1.2);
                    break;
                case "sweets":
                    console.log(quantity * 1.45);
                    break;
                case "peanuts":
                    console.log(quantity * 1.60);
                    break;
            }
    }

    switch (city) {
        case "Plovdiv":
            switch (product) {
                case "coffee":
                    console.log(quantity * 0.4);
                    break;
                case "water":
                    console.log(quantity * 0.7);
                    break;
                case "beer":
                    console.log(quantity * 1.15);
                    break;
                case "sweets":
                    console.log(quantity * 1.3);
                    break;
                case "peanuts":
                    console.log(quantity * 1.5);
                    break;
            }
    }

    switch (city) {
        case "Varna":
            switch (product) {
                case "coffee":
                    console.log(quantity * 0.45);
                    break;
                case "water":
                    console.log(quantity * 0.7);
                    break;
                case "beer":
                    console.log(quantity * 1.1);
                    break;
                case "sweets":
                    console.log(quantity * 1.35);
                    break;
                case "peanuts":
                    console.log(quantity * 1.55);
                    break;
            }

    }

}

// neighbourhoodShop(["coffee", "Varna", "2"]);
// neighbourhoodShop(["peanuts", "Plovdiv", "1"]);
// neighbourhoodShop(["beer", "Sofia", "2"]);
// neighbourhoodShop(["water", "Plovdiv", "2"]);
neighbourhoodShop(["bananas", "Plovdiv", "2.23"]);