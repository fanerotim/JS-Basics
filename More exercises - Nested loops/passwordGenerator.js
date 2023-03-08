function passwordGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);

    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let symbolOne = 0;
    let symbolTwo = 0;
    let symbolThree = '';
    let symbolFour = '';
    let symbolFive = 0;

    let finalResult = '';

    for (let a = 1; a <= n; a++) {
        symbolOne = a;
        for (let b = 1; b <= n; b++) {
           symbolTwo = b;
            for (let c = 0; c < l; c++) {
                symbolThree = alphabet[c];
                for (let d = 0; d < l; d++) {
                    symbolFour = alphabet[d];
                    for (let e = 1; e <= n; e++) {
                        if (e > a && e > b) {
                            symbolFive = e;
                        } else {
                            continue;
                        }
                        finalResult += `${symbolOne}${symbolTwo}${symbolThree}${symbolFour}${symbolFive} `
                    }
                }
                
            }
        }
    }
    console.log(finalResult);
}   

// passwordGenerator(["2", "4"]);
passwordGenerator(["3", "1"]);