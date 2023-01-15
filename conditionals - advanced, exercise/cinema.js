//In a movie theater the seats are arranged in a rectangular form with 'n' number of rows and columns.
//There are three types of tickets: Premiere - 12.00lv, Normal - 7.50lv, Discount - 5lv.
//Write a function that receives an argument - type of ticket and a number of rows and columns. The function must calculate the total income of tickets in full theater. 
//The result must be rounded to 2 decimal points.


function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let Premiere = 12;
    let Normal = 7.50;
    let Discount = 5;

    let totalIncome = 0; 

    switch(type) {
        case "Premiere":
            totalIncome = (rows * columns) * Premiere;
            break;
        case "Normal":
            totalIncome = (rows * columns) * Normal;
            break;
        case "Discount":
            totalIncome = (rows * columns) * Discount;
            break;
    }

    console.log(`${totalIncome.toFixed(2)} leva`);
}

// cinema([
//     "Premiere",
//     "10",
//     "12"]);

cinema([
    "Normal",
    "21",
    "13"]);

cinema([
    "Discount",
    "12",
    "30"]);


