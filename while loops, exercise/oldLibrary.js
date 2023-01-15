//Ani goes back to her home town after a long period out of the country. When she gets home she sees the old library of her grandmother and she remembers her favourite book
//Help Ani by writing a function which receives Ani's favourite book. Until Ani finds her book, the function checks the whole library and and reads each checked book on a new line.
//The books in the library have ended if we receive as input "No More Books".
//If Ani doesn't find her book, the function needs to print out:
//o	"The book you search is not here!"
//o	"You checked {брой} books."
//And if she finds the book then it prints out:
//o	"You checked {брой} books and found it."  


function oldLibrary(input) {
    let index = 0;

    let favouriteBook = input[index];
    index++;

    let searchedBook = input[index];
    let counter = 0;
    let isNoMoreBooks = false;

    while(searchedBook !== favouriteBook) {
        index++;
        searchedBook = input[index];
        counter++;

        if (searchedBook === "No More Books") {
            isNoMoreBooks = true;
            break;
        }
    }

    if (isNoMoreBooks) {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`)
    } else {
        console.log(`You checked ${counter} books and found it.`)
    }
}

// oldLibrary([
//     "Troy",
//     "Stronger",
//     "Life Style",
//     "Troy"]);

// oldLibrary([
//     "The Spot",
//     "Hunger Games",
//     "Harry Potter",
//     "Torronto",
//     "Spotify",
//     "No More Books"]);

oldLibrary([
    "Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"]);


