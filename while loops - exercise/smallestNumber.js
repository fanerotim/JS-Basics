//Write a function which receives 'n' number of numbers and reads them all until it receives the command "Stop".
//When it receives "Stop", the function must print out the smallest number provided in the input. 

function smallestNumber(input) {
    let index = 0;

    let command = input[index];
    index++;

    let smallestNum = Number.MAX_SAFE_INTEGER;

    while(command !== "Stop") {
        let number = Number(command);

        if (smallestNum > number) {
            smallestNum = number;
        }

        command = input[index];
        index++;    
    }

    console.log(smallestNum)
}

// smallestNumber([
//     "100",
//     "99",
//     "80",
//     "70",
//     "Stop"]);

// smallestNumber([
//     "-10",
//     "20",
//     "-30",
//     "Stop"]);

// smallestNumber([
//     "45",
//     "-20",
//     "7",
//     "99",
//     "Stop"]);

// smallestNumber([
//     "999",
//     "Stop"]);

smallestNumber([
    "-1",
    "-2",
    "Stop"]);





