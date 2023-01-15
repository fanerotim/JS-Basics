//Write a function which reads 'n' number of numbers from the input until it receives the command "Stop".
//Once the command stop is inputted, the function must print out the largest number in the input. 

function largestNumber(input) {
    let index = 0;

    let command = input[index];
    index++;

    let largestNum = Number.MIN_SAFE_INTEGER;

    while(command !== "Stop") {
        let number = Number(command);

        if (largestNum < number) {
            largestNum = number;
        }
        
        command = input[index];
        index++;
    }

    console.log(largestNum);
}

// largestNumber([
//     "100",
//     "99",
//     "80",
//     "70",
//     "Stop"]);

// largestNumber([
//     "-10",
//     "20",
//     "-30",
//     "Stop"]);

// largestNumber([
//     "45",
//     "-20",
//     "7",
//     "99",
//     "Stop"]);

// largestNumber([
//     "999",
//     "Stop"]);

largestNumber([
    "-1",
    "-2",
    "Stop"]);

