//Write a function which receives firstname, lastname, age and city of birth. Then prints out the following message specific:
// "You are <firstName> <lastName>, a <age>-years old person from <town>."
// With variables changed to the input that we receive.

function concatenateData(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}

concatenateData(["Petar", "Cholakov", "34", "Plovdiv"]);