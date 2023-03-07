function profit(input) {
    let oneLevCount = Number(input[0]);
    let twoLevCount = Number(input[1]);
    let fiveLevCount = Number(input[2]);
    let sum = Number(input[3]);

    let oneLeva = 0;
    //we don't have to change the value of one leva, as one leva is 1 coin of 1 leva
    let twoLeva = 2;
    //one coin of two leva = 2 leva;
    let fiveLeva = 5;
    //one note of five leva = 5 leva;

    let twoLevaCoinCounter = 0;
    let fiveLevaNoteCounter = 0;

    for (let i = 0; i <= oneLevCount; i++) {
        oneLeva = i * 1;
        
        for (let j = 0; j <= twoLevCount; j++) {
            twoLevaCoinCounter = j * 2;
            
            for (let k = 0; k <= fiveLevCount; k++) {
                fiveLevaNoteCounter = k * 5;
                
                if (oneLeva + twoLevaCoinCounter + fiveLevaNoteCounter === sum) {
                    console.log(`${oneLeva} * 1 lv. + ${twoLevaCoinCounter / twoLeva} * 2 lv. + ${fiveLevaNoteCounter / fiveLeva} * 5 lv. = ${sum} lv.`)
                } else {
                    continue;
                }
            }
        }
    }
}

// profit([
//     "3",
//     "2",
//     "3",
//     "10"
// ])

profit([
    "5",
    "3",
    "1",
    "7"
])