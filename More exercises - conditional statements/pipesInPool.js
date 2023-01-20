// A pool has two pipes from which it is being filled in. Each pipe has a certain debit (litres water that go through it for one hour).
//Emoployee switches both pipes at one time and leaves the hours for "n" number of hours.
//Write a programme which calculates the level of water in the pool at the moment when the employee returns. 
//Input: 1.Volume pool; 2.Debit of first pipe; 3.Debit of second pipie; 4.Time during which the employee is gone
//The function must print out: 
// 1) How much water has filled in the pool and percentage of water have both pipes filled the pool with in;
// o	"The pool is {percetage of water in the pool}% full. Pipe 1: {percent of first pipe}%. Pipe 2: {percent of second pipe}%."
//2) If the pool has been filled in and water overflown it
// o	"For {time during which the pool has been filled in} hours the pool overflows with {litres of water in exscees} liters."

function pipesInPool(input) {
    let poolVolume = Number(input[0]);
    let pipeOne = Number(input[1]);
    let pipeTwo = Number(input[2]);
    let employeeGoneTime = Number(input[3]);

    pipeOne = pipeOne * employeeGoneTime;
    pipeTwo = pipeTwo * employeeGoneTime;
    let litresFilledIn = pipeOne + pipeTwo;

    let pipeOnePercentage = (pipeOne / litresFilledIn) * 100;
    let pipeTwoPercentage = (pipeTwo / litresFilledIn) * 100;
    let poolWaterPercentage = (litresFilledIn / poolVolume) * 100;

    if (litresFilledIn <= poolVolume) {
        console.log(`The pool is ${(poolWaterPercentage.toFixed(2))}% full. Pipe 1: ${pipeOnePercentage.toFixed(2)}%. Pipe 2: ${pipeTwoPercentage.toFixed(2)}%.`);
    } else {
        console.log(`For ${employeeGoneTime} hours the pool overflows with ${(litresFilledIn - poolVolume).toFixed(2)} liters.`)
    }
}

// pipesInPool([
//     "1000",
//     "100",
//     "120",
//     "3"
// ])

pipesInPool([
    "100",
    "100",
    "100",
    "2.5"
])