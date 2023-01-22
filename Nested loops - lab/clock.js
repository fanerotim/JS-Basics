//Write a function which prints out the hours of the day from 0:0 until 23:59, eacfh on a new line.
//The hours need to be printed out in the format `{hour}:{min}`

function clock() {
    for (let hours = 0; hours < 24; hours++) {
        for (let min = 0; min < 60; min++) {
            console.log(`${hours}:${min}`)
        }
    }
}

clock();