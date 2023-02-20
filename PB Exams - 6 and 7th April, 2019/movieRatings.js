function movieRatings(input) {
    let moviesCount = Number(input[0]);

    let currentMovieName = '';
    let currentRating = 0;

    let movieName = '';
    let highestRating = 0;

    let lowestRating = 10;
    let movieNameLowestRating = '';

    let sumOfRatings = 0;

    for (let i = 1; i < input.length; i++) {

        if (i % 2 !== 0) {
            currentMovieName = input[i];
            continue;
        } else if (i % 2 === 0) {
            currentRating = Number(input[i])
            sumOfRatings += currentRating;
            if (highestRating < currentRating) {
                highestRating = currentRating;
                movieName = currentMovieName;
            } else if (currentRating < lowestRating) {
                lowestRating = currentRating;
                movieNameLowestRating = currentMovieName;
            }
        }
    }

    console.log(`${movieName} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${movieNameLowestRating} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${(sumOfRatings / moviesCount).toFixed(1)}`);
}

// movieRatings([
//     "5",
//     "A Star is Born",
//     "7.8",
//     "Creed 2",
//     "7.3",
//     "Mary Poppins",
//     "7.2",
//     "Vice",
//     "7.2",
//     "Captain Marvel",
//     "7.1"]);

movieRatings([
    "3",
    "Interstellar",
    "8.5",
    "Dangal",
    "8.3",
    "Green Book",
    "8.2"]);
