//We are invited to a 30th Birthday where the birthday boy celebrates with a big cake. He doesn't know how many pieces the guests can take from it.
//Our task is to write a function that calculates the number of pieces that the guests have taken before the cake is over. 
//We receive the dimenstions of the cake - length and width and then on each new line until we receive the command "STOP" or until the cake finishes,
//we receive the number of pieces that the guests take from it.
//One piece is 1x1cm.
//The programme needs to print out one of the following lines:
//•	"{number of pieces} pieces are left." - if we receive command "STOP" and there is still cake left
//•	"No more cake left! You need {numer of insufficient pieces} pieces more."

function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++

    let length = Number(input[index]);
    index++;

    let cakeVolume = width * length;
    let command = input[index]
    index++;

    let isStop = false;

    while(cakeVolume > 0) {
        cakeVolume -= Number(command);

        command = input[index];
        index++;

        if (command === "STOP") {
            isStop = true;
            break;
        }
    }

    if (isStop) {
        if (cakeVolume > 0) {
            console.log(`${cakeVolume} pieces are left.`)
        } else {
            console.log(`No more cake left! You need ${Math.abs(cakeVolume)} pieces more.`)
        }
    } else {
        console.log(`No more cake left! You need ${Math.abs(cakeVolume)} pieces more.`)
}
}

cake([
    "10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);

cake([
    "10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])

