// Write a programme which prints out all possible combinations of three letters in a certain interval, by skipping the combinations
//containing a given letter. At the end the programme needs to print out the number of printed out combinations.
// Input: 1. Lower case letter of the english alphabet from "a" to "z". 2. Lower case letter of the english alphabet starting from the first letter to the letter 'z'.
//3 Lower case letter from "a" to "z" - the comabinations containing this letter need to be skipped.

function letterCombinations(input) {
    let intervalStart = input[0];
    let intervalEnd = input[1];
    let letterToSkip = input[2];

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let chunkOfAlphabet = '';

    let currentLetter = '';
    let counter = 0;

    for (let i = 0; i < alphabet.length; i++) {
        currentLetter = alphabet[i]

        for (let j = currentLetter; j !== intervalEnd; j++) {
            if (j === intervalStart) {
                chunkOfAlphabet += j;
                counter++;
                break;
            } else if (counter !== 0 && j !== intervalStart) {
                chunkOfAlphabet += j;
                break;
            } else {
                break;
            }
        }
        if (currentLetter === intervalEnd) {
            chunkOfAlphabet += currentLetter;
            break;
        }
    }

    let finalResult = '';
    let firstLetter = '';
    let secondLetter = '';
    let thirdLetter = '';
    let secondCounter = 0;

    for (let firstOfChunk = 0; firstOfChunk < chunkOfAlphabet.length; firstOfChunk++) {
        firstLetter = chunkOfAlphabet[firstOfChunk];
        for (let secondOfChunk = 0; secondOfChunk < chunkOfAlphabet.length; secondOfChunk++) {
            secondLetter = chunkOfAlphabet[secondOfChunk];
            for (let thirdOfChunk = 0; thirdOfChunk < chunkOfAlphabet.length; thirdOfChunk++) {
                thirdLetter = chunkOfAlphabet[thirdOfChunk];

                if (firstLetter === letterToSkip) {
                    continue;
                } else if (secondLetter === letterToSkip) {
                    continue;
                } else if (thirdLetter === letterToSkip) {
                    continue;
                } else {
                    finalResult += (`${firstLetter}${secondLetter}${thirdLetter} `)
                    secondCounter++;
                }

            }
        }
    }
    console.log(`${finalResult}${secondCounter}`);
}

letterCombinations([
    "a",
    "c",
    "b"
])

// letterCombinations([
//     "f",
//     "k",
//     "h"
//     ]);

// letterCombinations([
//     "a",
//     "c",
//     "z",
//     ])