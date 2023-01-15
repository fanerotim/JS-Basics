function graduation(input) {
    let index = 0;
    let name = input[index];
    index++
    
    let grade = Number(input[index]); 
    index++ 
    
    let averageGrade = 0;
    let year = 0;

    let fail = 0;

    while(fail < 1 && year !== 12) {
        if (grade >= 4) {
            averageGrade += grade;
        } else {
            fail += 1;
        }

        year += 1;
        grade = Number(input[index]);
        index++;
    }

    if (year === 12 ) {
        console.log(`${name} graduated. Average grade: ${(averageGrade / year).toFixed(2)}`)
    } else {
        console.log(`${name} has been excluded at ${year} grade`)
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
    "5"]);

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
    "3"])

