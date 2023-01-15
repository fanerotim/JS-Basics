//Write a function, which receives a of figure (circle, triangle etc) as well as its dimensions and then calculates the area of the provided figure. 
//The figures could be 4 types - square, rectangle, circle, triangle.
//The result needs to be formatd to three decimal points

function areaOfFigures(input) {
    let figure = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);

    if (figure === "square") {
        console.log((a * a).toFixed(3));
    } else if (figure === "rectangle") {
        console.log((a * b).toFixed(3))
    } else if (figure === "circle") {
        console.log((Math.PI * Math.pow(a, 2)).toFixed(3))
    } else {
        console.log(((a * b) / 2).toFixed(3));
        
    }
}

areaOfFigures([
    "square",
    "5"]);

areaOfFigures([
    "rectangle",
    "7",
    "2.5"]);

areaOfFigures([
    "circle",
    "6"]);

areaOfFigures([
    "triangle",
    "4.5",
    "20"]);