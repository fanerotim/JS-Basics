//Ivancho is 18 years old and inherites monet and a time machine. He decides to go back to year 1800, however, he doesn't know if they money
//will be enough to live without having to work. Write a programme, which calculates, if Ivancho would have enough money to live without having to work until a certain year included.
//For every even year (1800, 1802 etc) he will spend 12000leva to live. Each odd year (1801, 1803 etc) he would spend 12000 + (50 * his age - 19 years of age, 20 years of age etc.)
//We receive 1. Inherited Money; and 2. The year to which he would have to live;

function backToThePast(input) {
    let inheritedMoney = Number(input[0]);
    let yearToLiveTo = Number(input[1]);

    let evenYear = 12000;
    // let oddYear = 12000 + (50 * birthday);
    
    let age = 18;
    let moneyToLive = 0;

    for (let i = 1800; i <= yearToLiveTo; i++) {
        let years = i;
        
        if (years === 1800) {
            age += 0;
        } else {
            age += 1;
        }

        if (years % 2 === 0) {
            moneyToLive += 12000;
        } else { 
            moneyToLive += (12000 + (50 * age));
        }
    }

    let leftMoney = Math.abs(moneyToLive - inheritedMoney);
   
    if (inheritedMoney >= moneyToLive) {
        console.log(`Yes! He will live a carefree life and will have ${leftMoney.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${leftMoney.toFixed(2)} dollars to survive.`) 
    }
}

backToThePast(["50000", "1802"]);
backToThePast(["100000.15", "1808"]);