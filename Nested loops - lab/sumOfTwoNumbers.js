// Write a function, which checks all possible combinations out of a parir of numbers in the interval of two given numbers.
//Output - must print out the first combination of numbers which when added together equal the value of a given "magic number".
//If there no combination of numbers equal the value of the magic number, the programme prints out a message that the magic number is not found.
//Input: 1.Start of the interval; 2.End of the interval; 3.Magic number
//If the magic number is found - print out the first combination of numbers within the intervals that make up the magic number and print out the number of the current iteration (how many iterations were needed)
//"Combination N:{number of iterations} ({first number} + {second number} = {magic number})"
//If the magic number is not found:
//"{number of iterations} combinations - neither equals {magic number}"

function sumOfTwoNumbers(input) {
    let intervalStart = Number(input[0]);
    let intervalEnd = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationCounter = 0;
 
    for (let x = intervalStart; x <= intervalEnd; x++) {
        for (let x1 = intervalStart; x1 <= intervalEnd; x1++) {
            combinationCounter += 1;
            if (x + x1 === magicNumber) {
                console.log(`Combination N:${combinationCounter} (${x} + ${x1} = ${magicNumber})`);
                return
            } 
        }
    }
    console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
}

sumOfTwoNumbers([
    "1",
    "10",
    "5"]);

sumOfTwoNumbers([
    "23",
    "24",
    "20"]);

sumOfTwoNumbers([
    "88",
    "888",
    "1000"]);

sumOfTwoNumbers([
    "88", 
    "888", 
    "2000"]);



