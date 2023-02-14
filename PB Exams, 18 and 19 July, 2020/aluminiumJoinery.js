function aluminiumJoinery(input) {
    let joineryCount = Number(input[0]);
    let sizeOfJoinery = input[1];
    let typeOfDelivery = input[2];

    let pricePerJoinery = 0;
    let totalJoineryPrice = 0;

    if (joineryCount < 10) {
        console.log("Invalid order");
        return;
    }  

    switch(sizeOfJoinery) {
        case "90X130":
            pricePerJoinery = 110;
            totalJoineryPrice = joineryCount * pricePerJoinery;

            if (joineryCount >= 30 && joineryCount <= 60) {
                totalJoineryPrice -= totalJoineryPrice * 0.05;
            } else if (joineryCount > 60) {
                totalJoineryPrice -= totalJoineryPrice * 0.08;
            }
            break;

        case "100X150":
            pricePerJoinery = 140;
            totalJoineryPrice = joineryCount * pricePerJoinery;

            if (joineryCount >= 40 && joineryCount <= 80) {
                totalJoineryPrice -= totalJoineryPrice * 0.06;
            } else if (joineryCount > 80) {
                totalJoineryPrice -= totalJoineryPrice * 0.10;
            }

            break;
        case "130X180":
            pricePerJoinery = 190;
            totalJoineryPrice = joineryCount * pricePerJoinery;

            if (joineryCount >= 20 && joineryCount <= 50) {
                totalJoineryPrice -= totalJoineryPrice * 0.07;
            } else if (joineryCount > 50) {
                totalJoineryPrice -= totalJoineryPrice * 0.12;
            }

            break;
        case "200X300":
            pricePerJoinery = 250;
            totalJoineryPrice = joineryCount * pricePerJoinery;

            if (joineryCount >= 25 && joineryCount <= 50) {
                totalJoineryPrice -= totalJoineryPrice * 0.09;
            } else if (joineryCount > 50) {
                totalJoineryPrice -= totalJoineryPrice * 0.14;
            }
            break;
    }

        if (typeOfDelivery == "With delivery") {
            totalJoineryPrice += 60;
        } else {
            totalJoineryPrice = totalJoineryPrice;
        }

        if (joineryCount > 99) {
            totalJoineryPrice -= totalJoineryPrice * 0.04;
        }

        

        console.log(`${totalJoineryPrice.toFixed(2)} BGN`)
}

aluminiumJoinery([
            "40", 
            "90X130",
            "Without delivery"]);

aluminiumJoinery([
            "105",
            "100X150",
            "With delivery"]);

aluminiumJoinery([
            "-1",
            "130X180",
            "With delivery"]);

aluminiumJoinery([]);




