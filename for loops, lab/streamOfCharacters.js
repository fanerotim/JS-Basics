//Write a function which receives text (string) and prints out every character of the string on a separate line.

function streamOfCharacters(input) {
    let text = input[0];

    for (let i = 0; i <= text.length -1; i++) {
        console.log(text[i]);
    }
}

streamOfCharacters(["softuni"]);
// streamOfCharacters(["ice cream"]);
