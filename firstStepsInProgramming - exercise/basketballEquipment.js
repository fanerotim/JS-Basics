//Jessi wants to traing basketball. To start training she needs basketball equipment. 
//Find out how much money would Jessi need to start training based on the following:
//Fee for 1 year is 365. Basketball shoes = 40% less than the price for 1 year of training. 
// Basketball clothes costs 20% less than the shoes.
// Ball costs 1/4 of the clothes
// Accessories cost 1/5 of the clothes. 

function basketballEquipment(input) {
    let yearlyFee = Number(input[0]);

    // let shoes = (40 * yearlyFee) / 100;
    let shoes = Number(input[0]) - ((40 * yearlyFee) / 100);
    let clothes = shoes - ((20 * shoes) / 100);

    let ball = clothes / 4;
    let assesories = ball / 5;

    let sum = shoes + clothes + ball + assesories + yearlyFee;

    console.log(sum);
}

basketballEquipment(["365 "]);