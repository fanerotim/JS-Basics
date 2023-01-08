//Find out the cost of school items that a school class has to pay 
//by removing the discount that the leader of the class gets from her local book store

function schoolItems(input) {

    let pencilsPack = 5.80 * Number(input[0]);
    let markersPack = 7.20 * Number(input[1]) ;
    let cleaningLiquid =  1.20 * Number(input[2]);
    
    let discount = (pencilsPack + markersPack + cleaningLiquid) * (Number(input[3]) / 100);

    sum = (pencilsPack + markersPack + cleaningLiquid) - discount;

    console.log(sum);

}

schoolItems([
    "4 ",
    "2 ",
    "5 ",
    "13 "])