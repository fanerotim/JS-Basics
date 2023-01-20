// Write a programme which multiplies positive numbers x2.
//If we receive a negative number the outpur must be "Negative number!", 
//else we print "Result: {result of multiplication}". The result must be rounded to two decimal points.


function multiplyByTwo(input) {
    let index = 0;
    let command = Number(input[index]);
    index++;

    while (command >= 0) {
        console.log(`Result: ${(command * 2).toFixed(2)}`);

        command = Number(input[index]);
        index++;
}

    if (command < 0) {
        console.log("Negative number!")
    }
 
}

// multiplyByTwo([
//     "12",
//     "43.2144",
//     "12.3",
//     "543.23",
//     "-20"
//     ]);

// multiplyByTwo([
//     "23.43",
//     "12.3245",
//     "0",
//     "65.23432",
//     "23",
//     "65",
//     "-12"
//     ]);

// multiplyByTwo(["-123"]);