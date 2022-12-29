//On your break you want to watch an episode of your favourite series. Write a program that would tell you if you have enough time.
//You need to also free up time for lunch and rest. Lunch would take up 1/8 of your break, and rest - 1/4. 
//We receive name of the series, length of the episode and break duration. 

function lunchBreak(input) {
    let seriesName = input[0];
    let seriesLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunch = breakLength / 8;
    let rest = breakLength / 4;

    let leftTime = breakLength - (lunch + rest);

    if (leftTime >= seriesLength ) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(leftTime - seriesLength)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(seriesLength - leftTime)} more minutes.`)
    }

}

lunchBreak(["Game of Thrones", "60", "96"]);
// lunchBreak(["Teen Wolf", "48", "60"]);