//Summer weather is very changeable and Viktor needs our help. Write a function which, according to the weather, will suggest to Viktor
// the type of clothes that he needs to wear according to the table below:

// Time of day /degrees                 Morning                  Afternoon                       Evening

// (10 >= degrees <= 18)        Outfit = Sweatshirt              Outfit = Shirt                  Outfit = Shirt
//                              Shoes = Sneakers                 Shoes = Moccasins               Shoes = Moccasins

// (18 > degrees <= 24)         Outfit = Shirt                   Outfit = T-Shirt                Outfit = Shirt 
//                              Shoes = Moccasins                Shoes = Sandals                 Shoes = Moccasins

// (degrees >= 25)              Outfit = T-Shirt                 Outfit = Swim Suit              Outfit = Shirt 
//                              Shoes = Sandals                  Shoes = Barefoot                Shoes = Moccasins

// Function receives: 1. degrees, 2. Time of day (Morning, Afternoon, Evening).

function summerDress(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];

    let outfit = 0;
    let shoes = 0;

    switch(timeOfDay) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else {
                outfit = "T-Shirt";
                shoes = "Sandals"
            }
            break;

        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
            break;

        case "Evening":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            break;
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

// summerDress(["16", "Morning"]);
summerDress(["22", "Afternoon"]);