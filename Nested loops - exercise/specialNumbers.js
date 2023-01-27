//Write a programme which receives one whole number, entered by the user and generates all possible "special" numbers between 1111 and 9999.
//To be "special" a number must meet the following criteria:
//Each digit of the number must be devided (%) by the number without any remainder
//Example: 
//Input: (["3"])
//Output: 1111 1113 1131 1133 1311 1313 1331 1333 3111 3113 3131 3133 3311 3313 3331 3333

function specialNumbers(input) {
    let num = Number(input[0]);

    let startInterval = 1111;
    let endInterval = 9999;
    let result = '';
    
    for (let currentNumAsString = startInterval; currentNumAsString <= endInterval; currentNumAsString++) {
        currentNumAsString = currentNumAsString.toString();

        let buff = '';

        for (let digits = 0; digits < currentNumAsString.length; digits++) {
            let currentNum = Number(currentNumAsString.charAt(digits))
            
            if (num % currentNum === 0) {
                buff += currentNum;
            }

            if (buff.length === 4) {
                result += `${buff} `;
            }
        }
        buff = '';
    }

    console.log(result)
}

// specialNumbers(["3"]);
// specialNumbers(["11"]);
specialNumbers(["16"]);