//Write a function which receives an array with whole numbers until it receives the command "stop".
//The function must find out the sum of all prime and all non-prime numbers. As, according to the math, negative numbers cannot be prime
//if a negative number is provided, the programme must print out "Number is negative." ingore it, and continue with the next number.
//Output: must be in the following format:
// "Sum of all prime numbers is: {prime numbers sum}"
// "Sum of all non prime numbers is: {nonprime numbers sum}"
//Example:
//Input:  (["3","9", "0", "7", "19", "4", "stop"])
//Output: "Sum of all prime numbers is: 29" Sum of all non prime numbers is: 13



function sumOfPrimeAndNonPrime(input) {
    let index = 0;

    let command = input[index];
    index++;

    let nonPrime = 0;
    let prime = 0;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log("Number is negative.")
            command = input[index];
            index++;
            continue;
        }
            let nonPrimeCount = 0;

        for (let i = 1; i < currentNum - 1; i++) {
            if (currentNum % (i + 1) === 0) {
                nonPrimeCount++;
                if (nonPrimeCount > 0) {
                    break;
                }
        }
    }

        if (nonPrimeCount > 0) {
            nonPrime += currentNum;
        } else {
            prime += currentNum;
        }

        command = input[index];
        index++
}
    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${nonPrime}`)
}

// sumOfPrimeAndNonPrime([
//     "3",
//     "9",
//     "0",
//     "7",
//     "19",
//     "4",
//     "stop"])

// sumOfPrimeAndNonPrime([
//     "30",
//     "83",
//     "33",
//     "-1",
//     "20",
//     "stop"])

sumOfPrimeAndNonPrime([
    "0",
    "-9",
    "0",
    "stop"])
