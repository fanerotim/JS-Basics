//Write a function which first reads a username (name) and a password of a user profile. Then reads passwords and checks if the correct one has been entered. 
//If the correct one is entered the programme greets the user. 

function password(input) {
    let index = 0;

    let password = input[1];
    index++
    let username = input[0];
    index++

    let counter = input[index];
    index++
    
    while (counter !== password) {
        counter = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`)
}

password([
    "Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])

password([
    "Gosho",
    "secret",
    "secret"])
