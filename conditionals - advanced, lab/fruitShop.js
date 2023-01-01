//Write a function which receives a fruit (banana, apple, orange, grapefruit, kiwi, pineapple, grapes), day of the week (Mon to Fri)
// and quantity (number) and then calculates the total cost of the products according to the current prices. Prices on weekends are  
//different than the ones on weekdays. If we receive invalid name of fruit or day, the function must print out "error".

function fruitShop(input) {
    let fruit = input[0];
    let weekDay = input[1];
    let quantity = input[2];

    let sum = 0;

    switch(weekDay) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch(fruit) {
                case "banana": 
                sum = quantity * 2.50;
                break;
                case "apple":
                sum = quantity * 1.20;
                break;
                case "orange":
                sum = quantity * 0.85;
                break;
                case "grapefruit":
                sum = quantity * 1.45;
                break;
                case "kiwi":
                sum = quantity * 2.70;
                break;
                case "pineapple":
                sum = quantity * 5.50;
                break;
                case "grapes":
                sum = quantity * 3.85; 
                break; 
            }
           
            if (fruit == "banana" || fruit == "apple" || fruit == "orange" || fruit == "grapefruit" || fruit == "kiwi" || fruit == "pineapple" || fruit == "grapes") {
                console.log(sum.toFixed(2));
            } else {
                console.log("error")
            } break;
            

        case "Saturday":
        case "Sunday": {
            switch(fruit) {
                case "banana":
                    sum = quantity * 2.70;
                    break;
                case "apple":
                    sum = quantity * 1.25;
                    break;
                case "orange":
                    sum = quantity * 0.90;
                    break;
                case "grapefruit": 
                    sum = quantity * 1.60;
                    break;
                case "kiwi":
                    sum = quantity * 3.00;
                    break;
                case "pineapple":
                    sum = quantity * 5.60;
                    break;
                case "grapes":
                    sum = quantity * 4.20;
                    break;         
            }

            if (fruit == "banana" || fruit == "apple" || fruit == "orange" || fruit == "grapefruit" || fruit == "kiwi" || fruit == "pineapple" || fruit == "grapes") {
                console.log(sum.toFixed(2));
            } else {
                console.log("error");
            }  break;
        } 
        
        default: console.log("error");
        break;
    }
}

fruitShop(["apple", "Tuesday", "2"]);
// fruitShop(["banana", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
// fruitShop(["grapes", "Saturday", "0.5"]);
// fruitShop(["pizza", "Tuesday", "0.5"]);
// fruitShop(["pizza", "Sunday", "0.5"]);
// fruitShop(["pizza", "Workday", "0.5"]);