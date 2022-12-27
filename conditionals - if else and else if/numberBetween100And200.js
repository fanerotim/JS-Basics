//Write a function that receives an integer and checks if the integer is below 100, 
//between 100 and 200 or greater than 200;

function numberBetween100And200(input) {
    let command = Number(input[0]);

    if (command < 100) {
        console.log('Less than 100');
    } else if (command >= 100 && command <= 200) {
        console.log('Between 100 and 200');
    } else {
        console.log('Greater than 200');
    }
}

numberBetween100And200(["210"]);