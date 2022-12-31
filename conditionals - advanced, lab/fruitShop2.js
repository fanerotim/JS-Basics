//Write a function which receives a fruit (banana, apple, orange, grapefruit, kiwi, pineapple, grapes), day of the week (Mon to Fri)
// and quantity (number) and then calculates the total cost of the products according to the current prices. Prices on weekends are  
//different than the ones on weekdays. If we receive invalid name of fruit or day, the function must print out "error".

function fruitShop(input) {
    let fruit = input[0];
    let weekDay = input[1];
    let quantity = input[2];

    switch(weekDay) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch(fruit) {
                case "banana": 
                console.log((quantity * 2.50).toFixed(2));
                break;
                case "apple":
                console.log((quantity * 1.20).toFixed(2));
                break;
                case "orange":
                console.log((quantity * 0.85).toFixed(2));
                break;
                case "grapefruit":
                console.log((quantity * 1.45).toFixed(2));
                break;
                case "kiwi":
                console.log((quantity * 2.70).toFixed(2));
                break;
                case "pineapple":
                console.log((quantity * 5.50).toFixed(2));
                break;
                case "grapes":
                console.log((quantity * 3.85).toFixed(2)); 
                break;
                default: console.log("error");
                break;
            } 
            break;
        case "Saturday":
        case "Sunday": {
            switch(fruit) {
                case "banana":
                    console.log((quantity * 2.70).toFixed(2));
                    break;
                case "apple":
                    console.log((quantity * 1.25).toFixed(2));
                    break;
                case "orange":
                    console.log((quantity * 0.90).toFixed(2));
                    break;
                case "grapefruit": 
                    console.log((quantity * 1.60).toFixed(2));
                    break;
                case "kiwi":
                    console.log((quantity * 3.00).toFixed(2));
                    break;
                case "pineapple":
                    console.log((quantity * 5.60).toFixed(2));
                    break;
                case "grapes":
                    console.log((quantity * 4.20).toFixed(2));
                    break;
                default: console.log("error");
                break;
            }
        }
        break;
        default: console.log("error");
        break;
      
}
}

// fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["banana", "Sunday", "3"]);
// fruitShop(["kiwi", "Monday", "2.5"]);
// fruitShop(["grapes", "Saturday", "0.5"]);
// fruitShop(["pizza", "Workday", "0.5"]);