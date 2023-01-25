// Write a function which receives two six-digit numbers - the first number is always greater than the second.
//The function must print out all numbers in the interval of the first and second number which meet the following requirement:
// - the sum of the digits on even and odd positions of the number must be equal. if no numbers meet this requirement the function should not print anything.
//For example - number 100001: the sum of digits on even positions is 1 (1 + 0 + 0). The sum of digits on odd positions 
//is also 1(0 + 0 + 1). Both sums are equal (1 and 1), so the function must print out the number - 100001.


function equalSums(input) {
    let intervalStart = Number(input[0]);
    let intervalEnd = Number(input[1]);

    let currentNum = 0;
    let result = '';

    for (let i = intervalStart; i <= intervalEnd; i++) {
        currentNum = i.toString()

        let sumOdd = 0;
        let sumEven = 0;

        for (let j = 0; j <= currentNum.length; j++) { 
            let position = j + 1;
            if (position % 2 !== 0) {
                sumOdd += Number(currentNum.charAt(j));
            } else {
                sumEven += Number(currentNum.charAt(j));
            }
        } 
        
        if (sumEven === sumOdd) {
            result += `${currentNum} `;
        }   
    }
    console.log(result)
}

equalSums([
    "100000",
    "100050"]);

// equalSums([
//     "123456",
//     "124000"]);

// equalSums([
//     "299900",
//     "300000"]);

// equalSums([
//     "100115",
//     "100120"]);




