//Write a function which receives the number 'n' and prints out the numbers from 1 to n, with a step of 3. 

function numbersFromOneToN(input) {
    let number = Number(input[0]);

    for(let i = 1; i <= number; i = i + 3) {
        console.log(i);
    }
}

// numbersFromOneToN(["10"]);
// numbersFromOneToN(["7"]);
// numbersFromOneToN(["15"]);
