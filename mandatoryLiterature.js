//Find out how many hours does George need to read his mandatory summer literature

function summerLiterature(input) {
    let pageCount = Number(input[0]);
    let readPages = Number(input[1]);
    let daysCount = Number(input[2]);

    let neededHours = pageCount / (readPages * daysCount);

    console.log(neededHours);
}

summerLiterature([
    "432 ",
    "15 ",
    "4 "])