//Write a function which prints out all numbers in range 1-100, which are divided by 3 and equal 0. 
//Each number must be printed out on a new line. 

function numbersDividedByThree() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
numbersDividedByThree();