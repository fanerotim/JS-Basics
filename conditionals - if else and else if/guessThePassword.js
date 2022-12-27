//Write a function that receives a password(text) and checks if the given password
//matches the one we already have

function passwordGuess(input) {
    let password = "s3cr3t!P@ssw0rd";
    let guess = input[0];

    if (guess === password) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passwordGuess(["s3cr3t!p@ss"]);