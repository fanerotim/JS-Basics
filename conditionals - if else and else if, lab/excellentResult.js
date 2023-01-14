//Write a function that prints out "Excellent" if the provided input is a number equal to 5.50 or higher. 
//If the number is lower than that there should be no output at all.

function excellentResult(input) {
    let grade = Number(input[0]);

    if (grade >= 5.50) {
        console.log("Excellent!")
    }
}

excellentResult(["6"]);
excellentResult(["5"]);
excellentResult(["5.50"]);
excellentResult(["5.49"]);