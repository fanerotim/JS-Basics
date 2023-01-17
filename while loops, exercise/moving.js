//On his 18th birthday Jose decided to move out and rent his own flat. He's packed his luggage in boxes and we need to write a function that checks
//if there is enough space in his new flat for all the boxes. One box = 1m x 1m x 1m;
//Input: 1.Width of the new apartment; 2.Length of it; 3.Height of it; Then we receive 'n' number of lines the number of boxes that Jose needs to move. 
//If we receive "Done" or the free space in the new flat ends the programme needs to end. 
//The function must print out the following:
//Id the command "Done" is provided and there is still free space:
//"{number of free space in sqm} Cubic meters left."
//If the free space ends before we receive the command "Done":
//"No more free space! You need {insufficient sqm space} Cubic meters more."


function moving(input) {
    let index = 0;

    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let height = Number(input[index]);
    index++

    let sqmOfApartment = width * length * height;

    let command = input[index];
    index++;

    let isDone = false;

    while(sqmOfApartment > 0) {
        let boxes = Number(command);
        sqmOfApartment -= boxes;

        command = input[index];
        index++;
        
        if (command === "Done") {
            isDone = true;  
            break;
        }
    }

    if (isDone) {
        if (sqmOfApartment > 0) {
            console.log(`${sqmOfApartment} Cubic meters left.`)
        } else {
            console.log(`No more free space! You need ${Math.abs(sqmOfApartment)} Cubic meters more.`)
        }
    } else {
        console.log(`No more free space! You need ${Math.abs(sqmOfApartment)} Cubic meters more.`)
    }
}

// moving([
//     "10", 
//     "10",
//     "2",
//     "20",
//     "20",
//     "20",
//     "20",
//     "122"]);

moving([
    "10", 
    "1",
    "2",
    "4", 
    "6",
    "Done"]);

