function travelAgency(input) {
    let cityName = input[0];
    let packageType = input[1];
    let vipDiscount = input[2];
    let daysCount = Number(input[3]);

    let cost = 0;

    let isInvalid = false;

    if (packageType !== "noEquipment" && packageType !== "withEquipment" && packageType !== "noBreakfast" && packageType !== "withBreakfast") {
        console.log("Invalid input!");
        return;
    }

    switch (cityName) {
        case "Bansko":
        case "Borovets":

            if (packageType === "withEquipment") {
                cost = 100;
                if (vipDiscount === "yes") {
                    cost -= cost * 0.10;
                }
            } else {
                cost = 80;
                if (vipDiscount === "yes") {
                    cost -= cost * 0.05;
                }
            }
            break;
        case "Varna":
        case "Burgas":

            if (packageType === "withBreakfast") {
                cost = 130;
                if (vipDiscount === "yes") {
                    cost -= cost * 0.12;
                }
            } else {
                cost = 100;
                if (vipDiscount === "yes") {
                    cost -= cost * 0.07;
                }
            }
            break;
        default:
            console.log("Invalid input!")
            return;
    }



    if (daysCount > 7) {
        daysCount--;
    }

    if (daysCount <= 0) {
        console.log("Days must be positive number!");
        return;
    }


    let totalPrice = daysCount * cost;

    if (isInvalid == false) {
        console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`)
    }

}

travelAgency([
    "Borovets",
    "noEquipment",
    "yes",
    "6"
]);

travelAgency([
    "Bansko",
    "withEquipment",
    "no",
    "2"]);

travelAgency([
    "Varna",
    "withBreakfast",
    "yes",
    "5"
]);

travelAgency([
    "Burgas",
    "noBreakfast",
    "no",
    "4"
]);

travelAgency([
    "Varna",
    "withBreakfast",
    "no",
    "0"
]);

travelAgency([
    "Varna",
    "noBreakfat",
    "no",
    "3"])
