//Write a function where Marin solves mathematical problems until he receives a message "Enough" from his lector. After each solved problem he receives a grade. 
//The function needs to stop if we receive "Enough" as input, or if Marin receives 'n' number of low grades.
//A low grade is each grade lower or equal to 4. 
//Input: First we receive: a number of low grades;  and then on each line - name of the exercise (text) and grade (number, in range 2-6);
//If Marin gets to command "Enough" the function must print out:
//o	"Average score: {average grade}"
//o	"Number of problems: {number of all exercises}"
//o	"Last problem: {name of last exercise}"
//If he reaches the 'n' number of low grades, the function needs to print out:
//o	"You need a break, {number of low grades} poor grades."


function examPreparation(input) {
    let index = 0;

    let lowGradeCount = Number(input[index]);
    index++;

    let command = input[index];
    let exerciseCount = 0;

    let exerciseName = '';
    let grade = 0;

    let negativeGrade = 0;

    while(command !== "Enough") {
        if (index % 2 !== 0) {
            exerciseName = command;
        } else {
            if (command <= 4) {
                negativeGrade++;
            }
            grade += Number(command);
            exerciseCount++   
        }

        if (negativeGrade >= lowGradeCount) {
            console.log(`You need a break, ${negativeGrade} poor grades.`)
            return;
        }

        index++;
        command = input[index];   
    }

    console.log(`Average score: ${(grade / exerciseCount).toFixed(2)}`);
    console.log(`Number of problems: ${exerciseCount}`);
    console.log(`Last problem: ${exerciseName}`);
}

// examPreparation([
//     "3",
//     "Money",
//     "6",
//     "Story",
//     "4",
//     "Spring Time",
//     "5",
//     "Bus",
//     "6",
//     "Enough"]);

examPreparation([
    "2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]);

