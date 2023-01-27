//The course "Train the Trainers" is towards its end and the final evaluation is close. Write a function which would
//evaluate the presentations of the participants. The function must calculate the average grade of the grades given the jury for each presentation.
//At the end it must print out the average grade of all given grades. 
//Input: 1. Number of people among the jury; 2. Name of presentation. 3. 'n' number of grades
//After all of the grades for a certain presentation are given, the programme must calculate the average grade of it and print out the result in the following format:
//"{name of presentation} - {average grade}."
//The programme then must continue with the next presentation.
//After receiving the command "Finish" the programme must print out:
//"Student's final assessment is {average grade of all presentation}." and the programme ends. All results must be rounded to two decimal places.


function trainTheTrainers(input) {
    let index = 0;
    
    let jury = Number(input[index]);
    index++;
    
    let command = input[index];
    index++;

    let presentationName = '';
    let finalResult = 0;
    let counter = 0;

    while (command !== "Finish") {
        presentationName = command;

        command = Number(input[index]);
        index++;

        let gradesSum = 0;
        
        for (let grade = 1; grade <= jury; grade++) {
            gradesSum += command;
            counter++;

            if (grade < jury) {
                command = Number(input[index]);
                index++
            }
            
            if (grade === jury) {
                finalResult += gradesSum;
                console.log(`${presentationName} - ${(gradesSum / jury).toFixed(2)}.`)
            }
        }
        command = input[index];
        index++
    }
    console.log(`Student's final assessment is ${(finalResult / counter).toFixed(2)}.`)
}

// trainTheTrainers([
//     "2",
//     "While-Loop",
//     "6.00",
//     "5.50",
//     "For-Loop",
//     "5.84",
//     "5.66",
//     "Finish"]);

// trainTheTrainers([
//     "3",
//     "Arrays",
//     "4.53",
//     "5.23",
//     "5.00",
//     "Lists",
//     "5.83",
//     "6.00",
//     "5.42",
//     "Finish"]);

// trainTheTrainers([
//     "2",
//     "Objects and Classes",
//     "5.77",
//     "4.23",
//     "Dictionaries",
//     "4.62",
//     "5.02",
//     "RegEx",
//     "2.88",
//     "3.42",
//     "Finish"]);


