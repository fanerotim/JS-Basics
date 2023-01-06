//Write a function which prints out numbers in range from 1 to 1000, which end in 7. 

function numbersEndingAt7() {
    let n = 1000;

    for (let i = 0; i <= n; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}

numbersEndingAt7();