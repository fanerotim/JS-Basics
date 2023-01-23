// Ani loves to travel and this year she wants to travel to a few different locations. When she chooses a location
//she would decide how much money she'd need and she will start saving money. When she saved enough, she can start travelling.
//Function receives an array, and each time it would start with the destination and the minimum budget that would be needed for the travel.
//Then we would receive 'n' number of sums which Ani saves and when she manages to save enough money, she goes on a trip and the output must be:
//  "Going to {destination}!" 
//When Ani visits all destinations that she likes, instead of a destination, she would neter "End" and our programme must end.


function solve(input) {
    let index = 0;

    let destination = input[index];
    index++;
    let minimumBudget = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let moneySaved = 0;

    while(moneySaved < minimumBudget) {
        moneySaved += Number(command);
        command = input[index];
        index++;

        while(moneySaved >= minimumBudget){
            console.log(`Going to ${destination}!`)
            moneySaved = 0;
            destination = command;
            command = input[index];
            index++
            minimumBudget = Number(command);
            command = input[index];
            index++;
        }

        if (destination === "End") {
            return;
        }
    }

}

solve(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])


solve(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

