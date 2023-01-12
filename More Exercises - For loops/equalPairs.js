//We have 'n' number of numbers. The first and second number form a pair (example: '2' + '3' form the pair - 5;). The third and fourt number also form a pair of numbers and so on. 
//Each new pair of numbers has a value - the sum of its consisting numbers. Write a proramme which checks if all new pairs of numbers have equal values or not. If not then 
//the function need to print out the greatest difference between two consecutive numbers. 


function equalPairs(input) {
    let pairCount = Number(input[0]);

    let diff = 0;

    let result = 0;
    let resultA = 0;
    
    
    for (let i = 1; i <= pairCount + pairCount; i += 2) {
        let counter = Number(input[i]);
        let secondCounter = Number(input[i + 1])

        if (i % 3 !== 0 && i < ((pairCount * 2) - 1)) {
            result = counter + secondCounter;
        } else {
            resultA = counter + secondCounter;
        }    
        
        if (result === resultA || pairCount < 2) {
            result = resultA;
        } else {
                diff = Math.abs(result - resultA);   
            }
}

    if (result === resultA) {
        console.log(`Yes, value=${resultA}`)
    } else {
        console.log(`No, maxdiff=${diff}`)
    }
}

equalPairs([
    "3",
    "1",
    "2",
    "0",
    "3",
    "4",
    "-1"
]);

equalPairs([
    "1",
    "5",
    "5"
]);

equalPairs([
    "2",
    "-1",
    "0",
    "0",
    "-1",    
]);

equalPairs([
    "4",
    "1",
    "1",
    "3",
    "1",
    "2",
    "2",
    "0",
    "0"  
]);

equalPairs([
    "2",
    "1",
    "2",
    "2",
    "2"
])

equalPairs([
    "2",
    "-1",
    "2",
    "0",
    "-1"
])

equalPairs([
    "7",
    "34",
    "-33",
    "52",
    "12",
    "-32",
    "32",
    "23",
    "41",
    "7",
    "25",
    "34",
    "23",
    "124",
    "21"
])