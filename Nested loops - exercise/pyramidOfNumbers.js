// Write a function that receives a number 'n' and then prints out a pyramid of numbres, as shown in the below examples:
// Input:          Output:                 
// (["7"])         1
//                 2 3
//                 4 5 6 
//                 7

// Input:          Output:                 
// (["12"])         1
//                  2 3
//                  4 5 6
//                  7 8 9 10 
//                  11 12

function solve(input) {
    let num = Number(input[0]);

    let result = '';
    let count = 0;
    let isDone = false;

    for (let i = 1; i <= num; i++) {
        if (isDone) {
            break;
        }
        for (let k = 1; k <= i; k++) {
            count++;
            result += `${count} `;

            if (count == num) {
                isDone = true;
                break;
            }   
        }
        result += "\n";   
    }
    console.log(result);
}

// solve(["7"]);
// solve(["12"]);
solve(["15"]);