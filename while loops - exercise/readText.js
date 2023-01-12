//Write a function which reads the elements of an array until it receives "Stop"

function readText(input) {
    let index = 0;

    let counter = input[index];
    index++;
    
    while (counter !== "Stop") {
        console.log(counter);
        
        counter = input[index];
        index++;
    }   
}

// readText([
//     "Nakov",
//     "SoftUni",
//     "Sofia",
//     "Bulgaria",
//     "SomeText",
//     "Stop",
//     "AfterStop",
//     "Europe",
//     "HelloWorld"])

readText([
    "Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"])

