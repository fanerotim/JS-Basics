//We are invited from the Film Academy to write a software that calculates the points of an actor. The Academy gives us initial
//points for the actor. Then each judge would give their score. The points that the actor receives depend on: the length of
// each judge's name * the points that they would give divided by 2. 
//If the result exceeds 1250.5 the programme must stop and print out that certain actor has been a nominated. 
// We receive - actor name, points from the academy, number of judges
//Then we get - 'n' number of judges and 'n' number of scores tha the judges give. 

function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let numberOfJudges = Number(input[2]);

    
    let goal = 1250.5;

    for (let i = 3; i < input.length; i += 2) {

        let judgesName = input[i].length;
        let judgesPoints = input[i + 1];

        academyPoints += ((judgesName * judgesPoints) / 2);

        if (academyPoints >= goal) {
            break;
        }    
    } 

    if (academyPoints >= goal) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`)
    } else {
        console.log(`Sorry, ${actorName} you need ${(goal - academyPoints).toFixed(1)} more!`)
    }
}


oscars([
    "Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);

oscars([
    "Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"]);

