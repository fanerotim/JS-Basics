function barcodeGenerator(input) {
    let intervalStart = input[0];
    let intervalEnd = input[1];

    let numOne = 0;
    let numTwo = 0;
    let numThree = 0;
    let numFour = 0;

    let totalNums = '';

    for (let i = Number(intervalStart[0]); i <= Number(intervalEnd[0]); i++) {
        if (i % 2 !== 0) {
            numOne = i;
        } else {
            continue;
        }

        for (let j = Number(intervalStart[1]); j <= Number(intervalEnd[1]); j++) {
            if (j % 2 !== 0) {
                numTwo = j;
            } else {
                continue;
            }

            for (let k = Number(intervalStart[2]); k <= Number(intervalEnd[2]); k++) {
                if (k % 2 !== 0) {
                    numThree = k;
                } else {
                    continue;
                }

                for (let l = Number(intervalStart[3]); l <= Number(intervalEnd[3]); l++) {
                    if (l % 2 !== 0) {
                        numFour = l; 
                    } else {
                        continue;
                    }
                    totalNums += `${numOne}${numTwo}${numThree}${numFour} `
                }

                
            }
        }
    }
    console.log(totalNums);
}

// barcodeGenerator([
//     "2345",
//     "6789"]);

// barcodeGenerator([
//     "3256",
//     "6579"]);

barcodeGenerator([
    "1365",
    "5877"]);




