//Write a function which receives a number 'n', then adds all of its digits and prints out the total sum of them.

function addNumbers(input) {
    let n = String(input[0]);
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        let num = Number(n[i]);
        sum += num;
        
    }
    console.log(`The sum of the digits is:${sum}`);
}

// addNumbers(["1234"]);
// addNumbers(["564891"]);