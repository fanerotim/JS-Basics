//Write a function which receives, calculates and prints out the sum of the vowels present in the input (string)
//according to the following rule:
// a = 1; e = 2; i = 3; o = 4; u = 5;

function solve(input) {
    let text = input[0];

    sum = 0;

    for (i = 0; i <= text.length; i++) {
        if (text[i] == 'a') {
            sum += 1;
        } else if (text[i] == 'e') {
            sum += 2;
        } else if (text[i] == 'i') {
            sum += 3;
        } else if (text[i] == 'o') {
            sum += 4;
        } else if (text[i] == 'u') {
            sum += 5;
        }
    }

    console.log(sum);
}

// solve(["hello"]);
// solve(["hi"]);
// solve(["bamboo"]);
solve(["beer"]);