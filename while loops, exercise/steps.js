//Gabi wanted to start leading a healthy lifestyle and she has a goal of doing 10000 steps each day. Some days she tired and goes home before reaching 10000 steps. 
//Write a function which receives as input the number of steps she walks each day. If she reaches the goal of 10000 steps, she programme must print out:
//"Goal reached! Good job!"  and how many more steps had she done. 
//{difference in steps} steps over the goal!"
//If Gabi decides to go home before reaching the goal of 10000 steps, she would enter the command "Going Home" and she would enter the steps she walked until she got home.
//If hasn't reached the goal, the programme must print - "{differene in steps} more steps to reach goal."

function steps(input) {
    let index = 0;
    let goal = 10000;
    let command = input[index];
    index++;

    let totalSteps = 0;

    while(totalSteps < goal) {
        if (command === "Going home") {
            command = input[index];
            totalSteps += Number(command);
            if (totalSteps > goal) {
                console.log("Goal reached! Good job!")
                console.log(`${totalSteps - goal} steps over the goal!`)
            } else {
                console.log(`${goal - totalSteps} more steps to reach goal.`)
            } 
            return;
        } 
        totalSteps += Number(command);

        command = input[index];
        index++;
    }

    console.log("Goal reached! Good job!")
    console.log(`${totalSteps - goal} steps over the goal!`)
}

// steps([
//     "1000",
//     "1500",
//     "2000",
//     "6500"]);

// steps([
//     "1500",
//     "3000",
//     "250",
//     "1548",
//     "2000",
//     "Going home",
//     "2000"]);

// steps([
//     "1500",
//     "300",
//     "2500",
//     "3000",
//     "Going home",
//     "200"]);

steps([
    "125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"]);



