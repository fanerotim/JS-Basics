function safePasswordGenerator(input) {
    let valueIntervalX = Number(input[0]);
    let valueIntervalY = Number(input[1]);
    let maxNumberPass = Number(input[2]);

    let asciiTable = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

    let firstSymbol = '';
    let firstSymbolIntervalStart = 3;
    let firstSymbolIntervalEnd = 23;

    let secondSymbol = '';
    let secondSymbolIntervalStart = 32;
    let secondSymbolIntervalEnd = 64;

    let thirdSymbol = '';
    let fourthSymbol = '';

    let counterC = 0;
    let symbolsCounter = 0;
    let finalCounter = 0;

    let finalResult = '';

    let isEnd = false;

    for (let a = 0; a <= asciiTable.length; a++) {

        if (a >= firstSymbolIntervalStart && a <= firstSymbolIntervalEnd) {
            firstSymbol = asciiTable[a]
        } else {
            continue;
        }

        for (let b = 0; b <= asciiTable.length; b++) {

            if (b >= secondSymbolIntervalStart && b <= secondSymbolIntervalEnd) {
                secondSymbol = asciiTable[b];
            } else {
                continue;
            }

            for (let c = 1; c <= valueIntervalX; c++) {
                thirdSymbol = c;

                counterC++;
                if (counterC > valueIntervalX) {
                    isEnd = true;
                    break;
                }

                for (let d = 1; d <= valueIntervalY; d++) {
                    fourthSymbol = d;

                    finalCounter++;
                    if (finalCounter > maxNumberPass) {
                        break;
                    }

                    if (symbolsCounter > 0) {
                        if (a >= firstSymbolIntervalEnd) {
                            firstSymbol = asciiTable[3]
                            a = firstSymbolIntervalStart;
                        } else {
                            firstSymbol = asciiTable[a += 1]
                        }
                        
                        if (b >= secondSymbolIntervalEnd) {
                            secondSymbol = asciiTable[32]
                            b = secondSymbolIntervalStart;
                        } else {
                            secondSymbol = asciiTable[b += 1]
                        }
                    }
                    symbolsCounter = 0;

                    finalResult += `${firstSymbol}${secondSymbol}${thirdSymbol}${fourthSymbol}${secondSymbol}${firstSymbol}|`
                    symbolsCounter++; 
                }
            }
            if (isEnd) {
                break;
            }
        }
        if (isEnd) {
            break;
        }
    }
    console.log(finalResult)
}

safePasswordGenerator([
    "2",
    "3",
    "10"]);

// safePasswordGenerator([
//     "20",
//     "50",
//     "10"]);
