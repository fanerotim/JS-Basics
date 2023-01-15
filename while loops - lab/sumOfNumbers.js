//Write a function which reads a number from an array and then continues on to read the numbers on each new line after the first number
//until their sum is greater or equal to the first number. The programme must print out the sum of the numbers after the first number.

function sumOfNumbers(input) {
    let index = 0;

    let sum = Number(input[index]);
    index++;

    let counter = Number(input[index]);
    index++
   
    let totalSum = 0;

    while (totalSum < sum) {
        totalSum += counter;

        counter = Number(input[index]);
        index++;
    }

    console.log(totalSum);
}

sumOfNumbers([
    "100",
    "10",
    "20",
    "30",
    "40"
    ])

sumOfNumbers([
    "20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])

