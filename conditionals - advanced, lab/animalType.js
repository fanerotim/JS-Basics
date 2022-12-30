//write a function which outputs the type of an animal according to its name, as entered by the user.
// dog > mammal; crocodile, tortoise, snake > reptile; others > unknown.

function animalType(input) {
    let command = input[0];

    switch(command) {
        case "dog": {
            console.log("mammal"); break;
        }

        case "crocodile":
        case "tortoise":
        case "snake": {
            console.log("reptile"); break;
        }
        default:
            console.log("unknown"); break;
        

    }
}

animalType(["cat"]);