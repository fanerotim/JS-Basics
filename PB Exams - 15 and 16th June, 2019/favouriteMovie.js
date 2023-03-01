function favouriteMovie(input) {
    let index = 0;

    let command = input[index];
    index++;

    let movieCounter = 0;
    let currentMovie = '';

    let totalAsciiSum = 0;
    let winnerTitle = '';

    let currentAsciiNum = 0;

    while (command !== "STOP") {
        currentMovie = command;
        movieCounter++;

        let currentAsciiValue = 0;

        if (movieCounter === 7) {
            console.log("The limit is reached.");
            break;
        }

        for (let i = 0; i < currentMovie.length; i++) {
            currentAsciiValue = currentMovie.charCodeAt(i);
            
            if (currentAsciiValue >= 97 && currentAsciiValue <= 122) {
                currentAsciiValue -= (currentMovie.length * 2)
            } else if (currentAsciiValue >= 65 && currentAsciiValue <= 90) {
                currentAsciiValue -= currentMovie.length;
            }

            currentAsciiNum += currentAsciiValue;

            if (i + 1 === currentMovie.length) {
                if (currentAsciiNum > totalAsciiSum) {
                    totalAsciiSum = currentAsciiNum;
                    winnerTitle = command;
                    currentAsciiNum = 0;
                } 
            }  
        }
        command = input[index];
        index++;
        currentAsciiNum = 0;
    }
    console.log(`The best movie for you is ${winnerTitle} with ${totalAsciiSum} ASCII sum.`)
}

favouriteMovie([
    "Matrix",
    "Breaking bad",
    "Legend",
    "STOP"]);

favouriteMovie([
    "Wrong turn",
    "The maze",
    "Area 51",
    "Night Club",
    "Ice age",
    "Harry Potter",
    "Wizards"]);

