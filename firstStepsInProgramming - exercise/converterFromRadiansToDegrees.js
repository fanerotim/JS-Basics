//Write a function that converts radians to degrees. Use the formula: градус = радиан * 180 / π.

function converterFromRadiansToDegrees(input) {
    let radians = Number(input[0]);

    let degrees = radians * 180 / Math.PI;

    console.log(degrees);
}

// converterFromRadiansToDegrees(["3.1416"]);
converterFromRadiansToDegrees(["6.2832"]);