//Write a function which receives age and sex, which are entered by the user. The function checks the input and returns:
//"Mr." - male 16 or over years of age. "Master" male under 16. "Ms" female 16 or over. "Miss" female 16 or under.

function sexAndAge(input) {
    let age = Number(input[0]);
    let sex = input[1];

    if (sex === "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        } 
        
    } else if (sex === "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }
}

// sexAndAge(["12", "f"]);
// sexAndAge(["17", "m"]);
// sexAndAge(["25", "f"]);
sexAndAge(["13.5", "m"]);