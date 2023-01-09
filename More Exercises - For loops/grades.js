//Write a function that creates statistics of exam grades. Initially the programme receives the number of students taken the exam,
// and the grade of each student. The programme must print out the percentage of students with grades 2 - 2.99, 3 - 3.99, 4 - 4.99, and 5 and above.
//Also print out the average grade of the exam. 

function grades(input) {
    let studentsCount = Number(input[0]);

    let F = 0;
    let D = 0;
    let B = 0;
    let A = 0;
    let sumOfgrades = 0;

    for (let i = 1; i <= studentsCount; i++) {
        let grade = Number(input[i]);
        sumOfgrades += grade;

        if (grade <= 2.99) {
            F += 1;
        } else if (grade <= 3.99) {
            D += 1;
        } else if (grade <= 4.99) {
            B += 1;
        } else {
            A += 1;
        } 
    }

    let totalGrades = F + D + B + A;
    let averageGrade = sumOfgrades / totalGrades;

    let percentageF = (F / totalGrades) * 100;
    let percentageD = (D / totalGrades) * 100;
    let percentageB = (B / totalGrades) * 100;
    let percentageA = (A / totalGrades) * 100;

    console.log(`Top students: ${(percentageA).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(percentageB.toFixed(2))}%`)
    console.log(`Between 3.00 and 3.99: ${(percentageD).toFixed(2)}%`)
    console.log(`Fail: ${(percentageF).toFixed(2)}%`);
    console.log(`Average: ${(averageGrade).toFixed(2)}`)
}

// grades(["10",
//     "3.00",
//     "2.99",
//     "5.68",
//     "3.01",
//     "4",
//     "4",
//     "6.00",
//     "4.50",
//     "2.44",
//     "5"
// ]);

grades([
    "6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"
]);