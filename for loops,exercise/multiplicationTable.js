//Multiplication table

function multiplicationTable(input) {
    let n = Number(input[0]);

    sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum = i * n;
        console.log(`${i} * ${n} = ${sum}`)
    }
}

multiplicationTable(["2"]);