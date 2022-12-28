//Petya has a toy shop. She receives a large order and with the money of this order she wants to go on a vacation. 
//If the number of the toys is 50 or bigger the client gets 25% discount. Out of the made money Petya has to pay 10% rent for the shop. 
//Find out if the money she makes would be sufficient. 

function toyShop(input) {
    let puzzle = 2.60;
    let doll = 3;
    let bear = 4.10;
    let minion = 8.20;
    let truck = 2;

    let excursionPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    let totalPrice = (puzzleCount * puzzle) + (dollCount * doll) + (bearCount * bear) + (minionCount * minion) + (truckCount * truck);  
    let discount = (totalPrice * 25) / 100;

    if (totalCount >= 50) {
        totalPrice = totalPrice - discount;
    }

    let rent = (totalPrice * 10) / 100;
    totalPrice -= rent;

    if (totalPrice >= excursionPrice) {
        console.log(`Yes! ${(totalPrice - excursionPrice).toFixed(2)} lv left.`)
    } else if (totalPrice <= excursionPrice) {
        console.log(`Not enough money! ${(excursionPrice - totalPrice).toFixed(2)} lv needed.`)
    }

}

toyShop(["320", "8", "2", "5", "5", "1"]);
// toyShop(["40.8","20","25","30","50","10"]);