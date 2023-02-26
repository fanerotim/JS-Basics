function everest(input) {
    let index = 0;

    let startingHeight = 5364;
    let goalHeight = 8848;
    
    let command = input[index];
    index++;

    let daysCounter = 0;
    let isClimbed = false;

    while (command !== "END") {

        let restAtCamp = command; 
        daysCounter++;
       
        if (daysCounter === 5) {
            break;
        }

        command = input[index];
        index++;

        let currentMeters = Number(command);
        startingHeight += currentMeters;

        if (startingHeight >= goalHeight) {
            isClimbed = true;
            break;
        }
        command = input[index];
        index++;
    }
    if (isClimbed) {
        console.log(`Goal reached for ${daysCounter} days!`);
    } else {
        console.log("Failed!");
        console.log(`${startingHeight}`);
    }
}

everest([
    "Yes",
    "1254",
    "Yes",
    "1402",
    "No",
    "250",
    "Yes",
    "635"])

// everest([
//     "Yes",
//     "1000",
//     "Yes",
//     "945",
//     "No",
//     "1200",
//     "END"])

// everest([
//     "Yes",
//     "535",
//     "Yes",
//     "849",
//     "Yes",
//     "499",
//     "Yes",
//     "400",
//     "Yes",
//     "500"])

// everest([
//     "Yes",
//     "700",
//     "END"])
