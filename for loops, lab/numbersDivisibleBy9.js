//Write a function which receives two numbers and prints out all numbers in their range
// which are devisible by 9 and equal to 0. ( %9 === 0 ) as well as the sum of the numbers divisible by 9.
// First print out the sum of all divisible by 9 numbers and then print out all of those numbers.


function numbersDivisibleBy9(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);

    let sum = 0;
    let interval = '';
    for (let i = n1; i <= n2; i++){
        if(i % 9 === 0) {
            sum += i; 
            // interval += String(i)
            
        }      
    }
    console.log(`The sum: ${sum}`); 

    for(let n = n1; n <= n2; n++) {
        if (n % 9 === 0) {
            console.log(n);
        }
    }
    
}

numbersDivisibleBy9(["100", "200"]);