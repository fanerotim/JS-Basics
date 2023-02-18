function theMostPowerfulWord(input) {
    let index = 0;

    let command = input[index];
    index++;

    let currentLetter = '';
    let currentValue = 0;

    let highestValue = 0;
    let wordWithHighestValue = '';

    let isVowel = false;
    let firstLetter = '';

    while (command !== "End of words") {

        for (let i = 0; i < command.length; i++) {
            currentLetter = command[i];
            firstLetter = command[0]

            if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u" || firstLetter === "y") {
                isVowel = true;
            } else if (firstLetter === "A" || firstLetter === "E" || firstLetter === "I" || firstLetter === "O" || firstLetter === "U" || firstLetter === "Y") {
                isVowel = true;
            }
            
            currentValue += currentLetter.charCodeAt();   
        }

        if (isVowel === true) {
            currentValue = currentValue * command.length;
            isVowel = false;
        } else {
            currentValue = Math.floor(currentValue / command.length);
        }

        if (currentValue > highestValue) {
            highestValue = currentValue;
            wordWithHighestValue = command;
        }

        currentValue = 0;
        command = input[index];
        index++;
    }

    console.log(`The most powerful word is ${wordWithHighestValue} - ${highestValue}`);
}

theMostPowerfulWord([
    "The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"
    ])

theMostPowerfulWord([
    "But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"
    ])