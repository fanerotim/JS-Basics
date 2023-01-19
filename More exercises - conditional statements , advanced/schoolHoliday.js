// Private school organises school camps during school holidays. Depending on the vacation (spring, summer or winter) and the type of group (girls, boys or mixed)
//the price of the nights in the hotel as well as the sport that they would practiced is different.
//                              Winter	    Spring	    Summer
// boys/girls	                  9.60	    7.20	    15
// mixed	                       10	    9.50	    20
// The school gets a discount depending on the number of students:
//50 or more students, 50% discount
//20 or more and less than 50, 15% discount
//10 or more and less than 20, 5% discount
//The table below describes the sports that the group would practice:
//                          Winter	         Spring	            Summer
// girls                    Gymnastics	    Athletics	    Volleyball
// boys	                    Judo	         Tennis	          Football
// mixed	                Ski	             Cycling	      Swimming
//Write a programme that calculates the cost of the vacation which the School would pay and prints the sport, which the students would play.
//Input: 1.Season; 2.Type of group; 3.Number of students; 4.Numbers if nights
//Output should be rounded to two decimal points and: "{sport to be played} {cost of the holiday} lv.“


function schoolHoliday(input) {
    let season = input[0];
    let typeOfGroup = input[1];
    let studentsCount = Number(input[2]);
    let nightsCount = Number(input[3]);

    let nightsCost = 0;
    let sportsPracticed = '';

    switch (season) {
        case "Winter":
            if (typeOfGroup === "girls" || typeOfGroup === "boys") {
                nightsCost = 9.60;
            } else {
                nightsCost = 10;
            }

            if (typeOfGroup === "girls") {
                sportsPracticed = "Gymnastics";
            } else if (typeOfGroup === "boys") {
                sportsPracticed = "Judo";
            } else {
                sportsPracticed = "Ski"
            }
            break;
        case "Spring":
            if (typeOfGroup === "girls" || typeOfGroup === "boys") {
                nightsCost = 7.20;
            } else {
                nightsCost = 9.50;
            }

            if (typeOfGroup === "girls") {
                sportsPracticed = "Athletics"
            } else if (typeOfGroup === "boys") {
                sportsPracticed = "Tennis"
            } else {
                sportsPracticed = "Cycling";
            }
            break;
        case "Summer":
            if (typeOfGroup === "girls" || typeOfGroup === "boys") {
                nightsCost = 15;
            } else {
                nightsCost = 20;
            }

            if (typeOfGroup === "girls") {
                sportsPracticed = "Volleyball";
            } else if (typeOfGroup === "boys") {
                sportsPracticed = "Football"
            } else {
                sportsPracticed = "Swimming"
            }
            break;
    }

    let discount = 0;

    if (studentsCount >= 50) {
        discount += 0.50;
    } else if (studentsCount >= 20 && studentsCount < 50) {
        discount += 0.15;
    } else if (studentsCount >= 10 && studentsCount < 20) {
        discount += 0.05;
    }

    let totalCost = (nightsCount * nightsCost) * studentsCount;
    discount = totalCost * discount;
    let finalPrice = totalCost - discount;

    console.log(`${sportsPracticed} ${finalPrice.toFixed(2)} lv.`);
}

// schoolHoliday([
//     "Spring",
//     "girls",
//     "20",
//     "7"
//     ]);

// schoolHoliday([
//     "Winter",
//     "mixed",
//     "9",
//     "15"
// ]);

// schoolHoliday([
//     "Summer",
//     "boys",
//     "60",
//     "7"
//     ]);

schoolHoliday([
    "Spring",
    "mixed",
    "17",
    "14"
    ]);