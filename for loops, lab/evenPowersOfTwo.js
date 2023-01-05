//Write a function which receives a number 'n' and then prints out the even numbers of that number on 2nd power

function evenPowersOfTwo(input) {
    let n = Number(input[0]);

    for(let i = 0; i <= n; i++) {
        if(i % 2 == 0) {
            console.log(Math.pow(2,i));
        }
    }
}

// evenPowersOfTwo(["3"]);
// evenPowersOfTwo(["4"]);
// evenPowersOfTwo(["5"]);
// evenPowersOfTwo(["6"]);
evenPowersOfTwo(["7"]);