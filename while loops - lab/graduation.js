//Write a programme which calculates the average grade of a student's school years (grade 1 to 12). 
//First argument would provide us with the name of the student and then on each new line we'd be receiving their yearly grades. 
//The student goes in next class if his yearly grade is 4 or higher. If the student fails more than one time, he is excluded from school and the programme ends
//by printing out which class the student was excluded at. 
//If the student graduates successfully we need to print out "{student's name} graduated. Average grade: {average grade}"
//Else, we print out "{student's name} has been excluded at {grade/class} grade"
//All grades need to be rounded to two decimal points

function graduation(input) {
    let index = 0;

    let name = input[index];
    index++;

    let year = 1;
    let averageGrade = 0;
    let fail = 0;
    let hasFailed = false;

    while (year <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4) {
            fail++;
            if (fail === 2) {
                hasFailed = true;
                break;
            }; continue;
        }

        averageGrade += grade;
        year++;  
        grade = Number(input[index]);    
    }

    if (hasFailed) {
        console.log(`${name} has been excluded at ${year} grade`)
    } else {
        console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`);
    }
}

graduation([
    "Gosho", 
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])


graduation([
    "Mimi", 
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"]);

