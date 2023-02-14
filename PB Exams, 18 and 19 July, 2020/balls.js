function balls(input) {
    let numberOfBalls = Number(input[0]);
    let points = 0;

    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let other = 0;
    
    for (let i = 1; i <= numberOfBalls; i++) {
        let ballColor = input[i];
        
        if (ballColor == "red") {
            points += 5;
            red++;
        } else if (ballColor == "orange") {
            points += 10;
            orange++;
        } else if (ballColor == "yellow") {
            points += 15;
            yellow++;
        } else if (ballColor == "white") {
            points += 20;
            white++;
        } else if (ballColor == "black") {
            points = Math.floor(points / 2);
            black++;
        } else {
            other++;
            continue;
        }
    }

    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`)
}

// balls([
//     "3",
//     "white",
//     "black",
//     "pink"])

balls([
    "5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"])


