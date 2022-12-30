//Write a function, which receives a product name and then checks if it's a fruit or vegetable. 
//Print out of the input was a fruit or a vegetable. For all other cases print out 'unknown'

function fruitOrVegetable(input) {
    let command = input[0];

    switch(command) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes": console.log("fruit"); break;  
        
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log("vegetable"); break;
        default: console.log("unknown");
    }
}

fruitOrVegetable(["water"])