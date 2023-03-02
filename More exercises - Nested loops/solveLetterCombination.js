function letterCombinations(input) {
    let intervalStart = input[0];
    let intervalEnd = input[1];
    let letterToSkip = input[2];

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let chunkOfAlphabet = '';

    let currentLetter = '';

    for (let i = 0; i < alphabet.length; i++) {
        currentLetter = alphabet[i]

        if (currentLetter === intervalStart) {
            chunkOfAlphabet += currentLetter
        } else if (currentLetter === intervalEnd) {
            chunkOfAlphabet += currentLetter;
        }
        // if (index !== intervalEnd) {
        //     console.log(index)
        // } else if (index === intervalEnd) {
        //     console.log(index)
        //     break;
        // } else {
        //     continue;
        // }
        

        // for (let j = index; index !== intervalEnd; j++) {
        //     console.log(j)
        // }

        

        // for (let j = alphabet[i]; j <= intervalEnd; j++) {
        //     if (currentLetter === j) {
        //         result += j;
        //     } else {
        //         break;
        //     }

        //     for (let k = intervalStart; k <= intervalEnd; k++) {
        //         if (currentLetter === k) {
        //             result += k;
        //         } else {
        //             break;
        //         }

        //         for (let q = intervalStart; q <= intervalEnd; k++) {
        //             if (currentLetter === q) {
        //                 result += currentLetter;
        //                 break;
        //             }
        //         }
        //     }
            
        // }
            
    }
    // console.log(`${result}`);
    // console.log(currentLetter);
   console.log(chunkOfAlphabet);
    
}

// letterCombinations([
//     "a",
//     "c",
//     "b"
// ])

letterCombinations([
    "f",
    "k",
    "h"

])