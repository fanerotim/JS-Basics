//Flower shop offers three types of flowers: chrysantemum, roses, and tulips. Pricing depends on on the season:
//Summer/Spring: chrysantemum - 2, rose - 4.10, tulip - 2.50; Autumn/Winter: chrysantemum - 3.75, rose - 4.50, tulip - 4.15;
//On holidays the price of all flowers is increased by 15%.
//The following discounts are being offered:
//More than 7 tulips purchased in Spring - 5% off from the cost of the whole bouqet. 
//10 or more roses in Winter = 10% off from the cost of the bouqet.
//More than 20 purchased flowers in total in any season - 20% off from the cost of the bouqet.
//The price of bouquet arrangement is 2.
//Input: 1. number of chrysantemum; 2. number of roses; 3. number of tulips; 4. season; 5. Holiday or No;
//Print out the price of a bouqet

function flowerShop(input) {
    let chrysanthemumCount = Number(input[0]);
    let roseCount = Number(input[1]);
    let tulipCount = Number(input[2]);
    let season = input[3];
    let holidayOrNo = input[4];

    let chrysanthemumCost = 0;
    let roseCost = 0;
    let tulipCost = 0;

    switch(season) {
        case "Spring":
        case "Summer":
            chrysanthemumCost = 2;
            roseCost = 4.10;
            tulipCost = 2.50;
            break;
        case "Autumn":
        case "Winter":
            chrysanthemumCost = 3.75;
            roseCost = 4.50;
            tulipCost = 4.15;
            break;  
    }

    if (holidayOrNo === "Y") {
        chrysanthemumCost += chrysanthemumCost * 0.15;
        roseCost += roseCost * 0.15;
        tulipCost += tulipCost * 0.15;
    }
    
    let bouquet = (chrysanthemumCount * chrysanthemumCost) + (roseCount * roseCost) + (tulipCount * tulipCost);
    
    if (season === "Spring") {
        if (tulipCount > 7) {
            bouquet -= (bouquet * 0.05);
        }
    } else if (season === "Winter") {
        if (roseCount >= 10) {
            bouquet -= (bouquet * 0.10);
        }
    }
    
    if (chrysanthemumCount + roseCount + tulipCount > 20) {
        bouquet -= (bouquet * 0.20);
    }

    bouquet += 2;
    console.log(bouquet.toFixed(2)); 
}

flowerShop([
    "2",
    "4",
    "8",
    "Spring",
    "Y"
    ])

flowerShop([
    "3",
    "10",    
    "9",
    "Winter",
    "N"
    ])

flowerShop([
    "10",
    "10",
    "10",
    "Autumn",
    "N"
    ])