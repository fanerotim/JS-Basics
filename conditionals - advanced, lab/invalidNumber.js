//Write a function that checks if the provided number is invalid. Valid numbers are between 100-200 and 0. 
// All other numbers must return "invalid".

function invalidNumber(input) {
    let command = Number(input[0]);

    if (command >= 100 && command <= 200 || command === 0) {
    } else [
        console.log("invalid")
    ]
}

invalidNumber(["0"]);