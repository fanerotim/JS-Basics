//Write a function which checks if the provided by the user number is between -100 and 100 and it is also different than 0.
//If true - output "Yes", it false - output "No".

function intervalNumber(input) {
    let command = Number(input[0]);

    if (command >= -100 && command <= 100 & command !== 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }

}

intervalNumber(["25"]);