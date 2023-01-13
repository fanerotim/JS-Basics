//Write a function that calculates how much money in total there is in a bank account, after we make a certain amount of instalments. 
//Each element from the input would provide us with the sum of each installment, until the input is "NoMoreMoney." After each installment the programme
// has to print out "Increase: + the sum of money" and each individual installment needs to be added to the total amount of money in the account. 
//If we receive a number smaller than 0, the programme needs to print out 'Invalid operation!' and stop. 
//When the programme stops we must print out the total amount of money in the account. All printed out sums need to be rounded to two decimal points. 

function accountBalance(input) {
    let index = 0;

    let installment = input[index]; 
    index++;

    let accountBalance = 0;

    while (installment !== "NoMoreMoney") {
        if (installment < 0) {
            console.log("Invalid operation!")
            break;
        }

        let installmentNum = Number(installment)
        console.log(`Increase: ${(installmentNum).toFixed(2)}`);
        
        accountBalance += installmentNum;

        installment = input[index];
        index++; 
    }
    console.log(`Total: ${(accountBalance).toFixed(2)}`)
}

// accountBalance([
//     "5.51", 
//     "69.42",
//     "100",
//     "NoMoreMoney"
// ]);

accountBalance([
    "120",
    "45.55",
    "-150"]);

