//Write a function which checks if a point (x, y) is located on any of the borders of a regtangle (x1, y1) - (x2, y2). The input is read by the console
//and consists of 6 commands entered by the user - x1, y1, x2, y2, x and y. It is guaranteed that x1 < x3 and y1 < y2. 
//The programme must print out "Border" (the point is located on nay of the borders) or "Inside/Outisde" in any other case.

function pointOnRectangleBorder(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);

    if ((x === x1 || x === x2) && (y >= y1 && y <= y2)) {
        console.log("Border");
    } else if ((y === y1 || y === y2) && (x >= x1 && x <= x2)) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }

}

// pointOnRectangleBorder([
//     "2",
//     "-3",
//     "12",
//     "3",
//     "8",
//     "-1"
//     ]);

// pointOnRectangleBorder([
//     "2",
//     "-3",
//     "12",
//     "3",
//     "12",
//     "-1"
//     ]);

// pointOnRectangleBorder([
//     "2",
//     "-3",
//     "12",
//     "3",
//     "2",
//     "4"])

// pointOnRectangleBorder([
//     "2",
//     "-3",
//     "12",
//     "3",
//     "12",
//     "4"]);

// pointOnRectangleBorder([
//     "2",
//     "-3",
//     "12",
//     "3",
//     "12",
//     "-4"]);

pointOnRectangleBorder([
    "2",
    "-3",
    "12",
    "3",
    "2",
    "-5"])