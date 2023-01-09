//Write a function which calculats how many hours would be required for the completion of 'n' number of projects. One project is completed in 3 hours.
//We receive the architect's name and the number of projects they'd need to complete. 

function projectsCreation(input) {
    let architectName = input[0];
    let projectsCount = Number(input[1]);
    let timeForOneProject = 3;

    let requiredTime = projectsCount * timeForOneProject;
    
    console.log(`The architect ${architectName} will need ${requiredTime} hours to complete ${projectsCount} project/s.`)

}

// projectsCreation(["George", "4"]);
projectsCreation(["Sanya", "9"]);