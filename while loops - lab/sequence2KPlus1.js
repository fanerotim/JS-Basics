//Write a programme which reads a number 'n', entered by the user and prints out all numbers less or equal to 'n' in the range: 1, 3, 7, 15, 31 etc.
//Each new printed number is created by multiplying the previous number + 1.

function sequence(input) {
    let index = 0;

    let number = Number(input[index]);
    index++

    let sum = 1;

    while(sum <= number) {
        console.log(sum);  
        sum = (sum * 2) + 1;     
    }
}

// sequence(["3"]);
// sequence(["8"]);
// sequence(["17"]);
// sequence(["31"]);