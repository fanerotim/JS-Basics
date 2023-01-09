//We are responsible for the logistics of different cargo. Depending on the weight of the cargo we need different vehicle. The price per ton, for which
//we transport the cargo is different for the different vehicles:
//Van - 200 per ton, Truck - 175 per ton, Train - 120 per ton. 
//We need to find the average cost per ton cargo, and the percentage of tons transported with each vehicle based on the total tons of cargo.
//We receive: 1. Number of cargo for transportation and 2. The tonnage of each separate cargo.

function logistics(input) {
    let cargoCount = Number(input[0]);

    let van = 0;
    let truck = 0;
    let train = 0;

    for (let i = 1; i <= cargoCount; i++) {
        let ton = Number(input[i]);

        if (ton <= 3) {
            van += ton;
        } else if ( ton <= 11) {
            truck += ton;
        } else {
            train += ton;
        }
    }

    let totalTons = van + truck + train;
    
    let vanCargoCost = van * 200;
    let truckCargoCost = truck * 175;
    let trainCargoCost = train * 120;

    let averageCargoCostPerTon = (vanCargoCost + truckCargoCost + trainCargoCost) / totalTons;
    let percentageCargoVan = (van / totalTons) * 100;
    let percentageCargoTruck = (truck / totalTons) * 100;
    let percentageCargoTrain = (train / totalTons) * 100;

    console.log(averageCargoCostPerTon.toFixed(2));
    console.log(`${(percentageCargoVan.toFixed(2))}%`);
    console.log(`${(percentageCargoTruck.toFixed(2))}%`);
    console.log(`${(percentageCargoTrain.toFixed(2))}%`);
}


logistics([
    "4",
    "1",
    "5",
    "16",
    "3",
    ]);

// logistics([
//     "5",
//     "2",
//     "10",
//     "20",
//     "1",
//     "7"]);