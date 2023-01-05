//Write a function which receives a positive number, entered by the user and prints out
// the numbers from n to 1 in reverse order. The entered 'n' number would always be greater than 1.

function fromNtoOneInReverseOrder(input) {
    let n = Number(input[0]);

    for (let i = 0; i < n; i++) {
        console.log(n - i);
    }
}

// fromNtoOneInReverseOrder(["2"]);
fromNtoOneInReverseOrder(["5"]);