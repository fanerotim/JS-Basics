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

