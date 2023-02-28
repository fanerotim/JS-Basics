function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let judgesCount = Number(input[2]);

    let command = '';
    let currentPoints = 0;
    let currentJudge = 0;

    let isReached = false;

    for (let i = 3; i < input.length; i++) {
        command = input[i];

        if (i % 2 !== 0) {
           currentJudge = command.length;
           continue; 
        } else if (i % 2 === 0) {
            currentPoints = Number(command);
        }

        academyPoints += (currentJudge * currentPoints) / 2;

        if (academyPoints > 1250.5) {
            isReached = true;
            break;
        }
    }

    if (isReached === true) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`)
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`)
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
