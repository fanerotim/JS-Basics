//Write a programme which reads hidden message in a sequence of letters. We receive 'n' number of letters, each on a new line until we receive the command "End"
//The words are created from the letter in their order of input. The symbols that are not part of the English alphabet should be ignored.
//The words hidden in the letters are devided by a secret command of three letter = "c", "o" and "n". The first time we receive any of those letters
//it should be ignored and marked as met already. Each following occurance of this letter should be added to the word as normal. Once all three letters are provided
//the programme must add interval " " to the word. And then we start a new word, by following the same rules.
//Input: 1. 'n' number of lines with one letter or symbol until we receive the command "End".

function streamOfLetters(input) {
    let index = 0;

    let letter = input[index];
    index++;

    let message = '';
    let word = '';

    let c = 0;
    let o = 0;
    let n = 0;

    while (letter !== "End") {
        if (letter === "c" || letter === "o" || letter === "n") {
            if (letter === "o") {
                o++;
                if (o >= 2) {
                    message += letter;
                }
            } else if (letter === "n") {
                n++;
                if (n >= 2) {
                    message += letter;
                }
            } else if (letter === "c") {
                c++
                if (c >= 2) {
                    message += letter;
                }
            }
        } else {
            message += letter;
        }

        if (o > 0 && n > 0 && c > 0) {
            message += " ";
            word = message
            o = 0;
            n = 0;
            c = 0;
        }

        letter = input[index];
        index++;
    }

    let noSpecialChar = word.replace(/[^a-zA-Z0-9 ]/g, '');
    console.log(noSpecialChar);
}


streamOfLetters([
    "H",
    "n",
    "e",
    "l",
    "l",
    "o",
    "o",
    "c",
    "t",
    "c",
    "h",
    "o",
    "e",
    "r",
    "e",
    "n",
    "e",
    "End"
]);

streamOfLetters([
    "%",
    "!",
    "c",
    "^",
    "B",
    "`",
    "o",
    "%",
    "o",
    "o",
    "M",
    ")",
    "{",
    "n",
    "A",
    "D",
    "End"
]);

streamOfLetters([
    "o",
    "S",
    "%",
    "o",
    "l",
    "^",
    "v",
    "e",
    "c",
    "n",
    "&",
    "m",
    "e",
    "c",
    "o",
    "n",
    "End"
])