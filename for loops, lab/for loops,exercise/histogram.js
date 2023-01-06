//We have 'n' numbers in range 1-1000. A certain percetange of them (p1) are less than 200 (<200), another percentage (p2)
//are between 200-399 (<400), another (p3) between 400-599 (<600), another (p4) between 600-799 (<800) and finally (p4) from 800 abive (> 800).
//Write a function that calculates the percentage of p1,p2,p3,p4 and p5
//For example: we have n = 20. numbers: 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65. 
// <200: 53, 7, 56, 180, 12, 7, 150, 2, 199, 46, 128, 65. in total 60% (p1 = 12 / 20 * 100 = 60.00%)
// 200 … 399: 250, 200 - 10%
// 400 … 599: 450 - 5%
// 600 … 799: 680, 600, 799 - 15%
// ≥ 800: 920, 800 - 10%

//The output needs to be roudned to 2 decimal places

function histogram(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= n; i++) {
        let number = input[i];

        if (number < 200) {
            p1 += 1;
        } else if (number < 400) {
            p2 += 1;
        } else if (number < 600) {
            p3 += 1;
        } else if (number < 800) {
            p4 += 1;
        } else {
            p5 += 1;
        }
        
}
console.log((p1 / n * 100).toFixed(2) + '%');
console.log((p2 / n * 100).toFixed(2) + '%');
console.log((p3 / n * 100).toFixed(2) + '%');
console.log((p4 / n * 100).toFixed(2) + '%');
console.log((p5 / n * 100).toFixed(2) + '%');
}

// histogram(["3", "1", "2", "999"]);
// histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
// histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])

