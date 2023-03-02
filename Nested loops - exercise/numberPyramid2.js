function solve(input) {
    let n = Number(input[0]);

    let counter = 0;
    let isFinished = false;

    for (let i = 1; i <= n; i++) {
        
        let result = '';

        if (isFinished) {
            break;
        }

        for (let j = 1; j <= i; j++) {
            counter++;
            result += `${counter} `

            if (counter === n) {
                isFinished = true;
                break;
            }
        }
        console.log(result);   
    }
}

solve(["7"])