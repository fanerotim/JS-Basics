function easterEggs(input) {
    let paintedEggs = Number(input[0]);
    
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxEggs = 0;

    let counter = 0;
    let nameOfColor = '';

    for (let i = 1; i <= paintedEggs; i++) {
        let currentEgg = input[i];

        if (currentEgg === "red") {
            red++;
        } else if (currentEgg === "orange") {
            orange++;
        } else if (currentEgg === "blue") {
            blue++;
        } else if (currentEgg === "green") {
            green++;
        }   
        
        if (red > counter) {
            counter = red;
            nameOfColor = "red";
        } else if (orange > counter) {
            counter = orange;
            nameOfColor = "orange";
        } else if (blue > counter) {
            counter = blue;
            nameOfColor = "blue";
        } else if (green > counter) {
            counter = green;
            nameOfColor = "green";
        }
}

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${counter} -> ${nameOfColor}`)

}

// easterEggs([
//     "7",
// "orange",
// "blue",
// "green",
// "green",
// "blue",
// "red",
// "green"])


// easterEggs([
//     "4",
//     "blue",
//     "red",
//     "blue",
//     "orange"]); 

