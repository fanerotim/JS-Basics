function weddingSeats(input) {
    let lastSector = input[0];
    let sectorOneRows = Number(input[1]);
    let seatsNumOddRow = Number(input[2]);

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    let allSectors = '';

    for (let i = 0; i < alphabet.length; i++) {
        let currentLetter = alphabet[i];

        if (currentLetter !== lastSector) {
            allSectors += currentLetter;
        } else if (currentLetter === lastSector) {
            allSectors += currentLetter;
            break;
        }   
    }

    let counter = 0;

    for (let sector = 0; sector < allSectors.length; sector++) {
        let currentSector = allSectors[sector];

        if (sector > 0) {
            sectorOneRows += 1;
        }

        for (let row = 1; row <= sectorOneRows; row++) {
            let currentRow = row;

            if (currentRow % 2 === 0) {
                seatsNumOddRow += 2;
            } else {
                seatsNumOddRow = Number(input[2])
            }

            let seatsLetter = ''; 

            for (let seats = 0; seats < alphabet.length; seats++) {
                if (seats < seatsNumOddRow) {
                    seatsLetter = alphabet[seats];
                } else {
                    break;
                }

                counter++;
                console.log(`${currentSector}${currentRow}${seatsLetter.toLowerCase()}`);   
            }
        }
    }

    console.log(counter);
}

// weddingSeats([
//     "B",
//     "3",
//     "2"
//     ])

weddingSeats([
    "C",
    "4",
    "2"
    ])